import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Card, Button, Chip, ToggleButton, TouchableRipple } from 'react-native-paper';
import { useAppContext } from '@/context/AppContext';

export default function CartScreen() {
  const [activeTab, setActiveTab] = useState('meals');
  const { 
    likedMeals, 
    removeLikedMeal, 
    removedIngredients, 
    removeIngredient, 
    addIngredient 
  } = useAppContext();

  const generateShoppingList = () => {
    const allIngredients = [];
    
    likedMeals.forEach(meal => {
      const removed = removedIngredients[meal.id] || [];
      const remainingIngredients = meal.ingredients.filter(ingredient => 
        !removed.includes(ingredient)
      );
      allIngredients.push(...remainingIngredients);
    });

    // Remove duplicates
    const uniqueIngredients = [...new Set(allIngredients)];
    return uniqueIngredients;
  };

  const shoppingList = generateShoppingList();

  const renderMealsTab = () => (
    <FlatList
      data={likedMeals}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.scrollViewContent}
      renderItem={({ item: meal }) => (
          <Card key={meal.id} style={styles.cardContainer}>
            <View style={[styles.mealCard, { overflow: 'hidden' }]}>
              <View style={styles.mealHeader}>
              <Image source={{ uri: meal.image }} style={styles.mealImage} />
              <View style={styles.mealInfo}>
                <Text style={styles.mealName}>{meal.name}</Text>
                <Chip style={styles.typeChip}>{meal.type}</Chip>
                <Text style={styles.nutrition}>
                  {meal.calories} cal • {meal.protein}g protein
                </Text>
              </View>
              <TouchableOpacity 
                onPress={() => removeLikedMeal(meal.id)}
              >
                <Text style={styles.removeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ingredientsSection}>
              <Text style={styles.ingredientsTitle}>Ingredients:</Text>
              <ScrollView 
                style={styles.ingredientsScrollView}
                contentContainerStyle={styles.ingredientsListContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {meal.ingredients.map((ingredient, index) => {
                  const isRemoved = removedIngredients[meal.id]?.includes(ingredient);
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => isRemoved ? addIngredient(meal.id, ingredient) : removeIngredient(meal.id, ingredient)}
                      style={[
                        styles.ingredientChip,
                        isRemoved && styles.removedIngredient
                      ]}
                    >
                      <Text style={[
                        styles.ingredientText,
                        isRemoved && styles.removedIngredientText
                      ]}>
                        {ingredient}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            </View>
          </Card>
      )}
    />
  );

  const renderIngredientsTab = () => (
    <View style={styles.shoppingListSection}>
      <Text style={styles.shoppingListTitle}>Shopping List</Text>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.shoppingListScrollView}>
          <View style={styles.shoppingListContainer}>
            {shoppingList.length > 0 ? (
              shoppingList.map((ingredient, index) => (
                <Text key={index} style={styles.shoppingListItem}>
                  • {ingredient}
                </Text>
              ))
            ) : (
              <Text style={styles.emptyText}>No ingredients added yet</Text>
            )}
          </View>
        </ScrollView>
      </View>
      <Button 
        mode="contained" 
        onPress={() => {}} 
        style={styles.generateButton}
        disabled={shoppingList.length === 0}
      >
        Generate Shopping List
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <ToggleButton.Row 
          onValueChange={value => setActiveTab(value)} 
          value={activeTab}
          style={styles.tabRow}
        >
          <TouchableRipple
            onPress={() => setActiveTab('meals')}
            style={styles.tabButton}
            rippleColor="rgba(0,0,0,0.08)"
            borderless
            accessibilityRole="button"
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <ToggleButton 
              icon="food" 
              value="meals" 
              status={activeTab === 'meals' ? 'checked' : 'unchecked'}
              style={styles.toggleInner}
            />
          </TouchableRipple>

          <TouchableRipple
            onPress={() => setActiveTab('ingredients')}
            style={styles.tabButton}
            rippleColor="rgba(0,0,0,0.08)"
            borderless
            accessibilityRole="button"
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <ToggleButton 
              icon="format-list-bulleted" 
              value="ingredients" 
              status={activeTab === 'ingredients' ? 'checked' : 'unchecked'}
              style={styles.toggleInner}
            />
          </TouchableRipple>
        </ToggleButton.Row>
      </View>

      {activeTab === 'meals' ? renderMealsTab() : renderIngredientsTab()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 3,
  },
  tabBar: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  toggleInner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  tabContent: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    padding: 10,
  },
  cardContainer: {
    marginBottom: 15,
    borderRadius: 10,
  },
  mealCard: {
    borderRadius: 10,
  },
  mealHeader: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  mealImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  typeChip: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  nutrition: {
    fontSize: 12,
    color: '#666',
  },
  removeButton: {
    padding: 5,
  },
  removeButtonText: {
    fontSize: 18,
    color: '#ff6b6b',
  },
  ingredientsSection: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  ingredientsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientsListContainer: {
    paddingVertical: 8,
    paddingRight: 16,
  },
  ingredientsScrollView: {
    maxHeight: 150,
    elevation: 1,
  },
  ingredientChip: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
  },
  removedIngredient: {
    backgroundColor: '#ffebee',
    opacity: 0.5,
  },
  ingredientText: {
    fontSize: 12,
    color: '#1976d2',
  },
  removedIngredientText: {
    color: '#d32f2f',
    textDecorationLine: 'line-through',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  shoppingListSection: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },
  shoppingListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  shoppingListScrollView: {
    width: '100%',
  },
  shoppingListContainer: {
    paddingBottom: 20,
  },
  shoppingListItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    paddingLeft: 10,
  },
  generateButton: {
    backgroundColor: '#51cf66',
  },
});
