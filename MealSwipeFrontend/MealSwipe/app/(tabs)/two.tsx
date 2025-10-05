import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Card, Button, Chip, ToggleButton } from 'react-native-paper';
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
          <Card key={meal.id} style={styles.mealCard}>
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
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ingredientsSection}>
              <Text style={styles.ingredientsTitle}>Ingredients:</Text>
              <View style={styles.ingredientsList}>
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
              </View>
            </View>
          </Card>
      )}
    />
  );

  const renderIngredientsTab = () => {
    const allIngredients = [];
    
    likedMeals.forEach(meal => {
      const removed = removedIngredients[meal.id] || [];
      const remainingIngredients = meal.ingredients.filter(ingredient => 
        !removed.includes(ingredient)
      );
      allIngredients.push(...remainingIngredients);
    });

    // Remove duplicates and sort alphabetically
    const uniqueIngredients = [...new Set(allIngredients)].sort();

    return (
      <FlatList
        data={uniqueIngredients}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollViewContent}
        renderItem={({ item }) => (
          <View style={styles.ingredientItem}>
            <Text style={styles.ingredientText}>• {item}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No ingredients added yet!</Text>
            <Text style={styles.emptySubtext}>Add meals to see ingredients</Text>
          </View>
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>
      
      <View style={styles.tabContainer}>
        <ToggleButton.Row 
          onValueChange={value => setActiveTab(value)} 
          value={activeTab}
          style={styles.tabRow}
        >
          <ToggleButton 
            icon="food" 
            value="meals" 
            status={activeTab === 'meals' ? 'checked' : 'unchecked'}
            style={styles.tabButton}
          />
          <ToggleButton 
            icon="format-list-bulleted" 
            value="ingredients" 
            status={activeTab === 'ingredients' ? 'checked' : 'unchecked'}
            style={styles.tabButton}
          />
        </ToggleButton.Row>
      </View>

      {likedMeals.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No meals in your cart yet!</Text>
          <Text style={styles.emptySubtext}>Go back to swipe and like some meals</Text>
        </View>
      ) : (
        <View style={styles.tabContent}>
          {activeTab === 'meals' ? renderMealsTab() : renderIngredientsTab()}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  tabContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  tabRow: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    elevation: 2,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  tabContent: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  mealCard: {
    marginBottom: 15,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#fff',
  },
  mealHeader: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  mealImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  typeChip: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  nutrition: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ingredientsSection: {
    padding: 15,
    paddingTop: 0,
  },
  ingredientsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    maxHeight: 100,
  },
  ingredientItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    elevation: 1,
  },
  ingredientText: {
    fontSize: 16,
    color: '#333',
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
  shoppingListContainer: {
    marginBottom: 20,
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
