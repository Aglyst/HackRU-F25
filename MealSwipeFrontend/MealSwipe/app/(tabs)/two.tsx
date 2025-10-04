import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Button, Chip } from 'react-native-paper';
import { useAppContext } from '@/context/AppContext';

export default function CartScreen() {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>
      <Text style={styles.subtitle}>Manage your liked meals</Text>

      <ScrollView style={styles.scrollView}>
        {likedMeals.map((meal) => (
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
        ))}

        {likedMeals.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No meals in your cart yet!</Text>
            <Text style={styles.emptySubtext}>Go back to swipe and like some meals</Text>
          </View>
        )}
      </ScrollView>

      {likedMeals.length > 0 && (
        <View style={styles.shoppingListSection}>
          <Text style={styles.shoppingListTitle}>🛍️ Shopping List</Text>
          <View style={styles.shoppingListContainer}>
            {shoppingList.map((ingredient, index) => (
              <Text key={index} style={styles.shoppingListItem}>
                • {ingredient}
              </Text>
            ))}
          </View>
          <Button 
            mode="contained" 
            style={styles.generateButton}
            onPress={() => {
              const list = generateShoppingList();
              console.log('Shopping List Generated:', list);
              // You could add a modal or alert here to show the full list
              alert(`Shopping List Generated!\n\n${list.join('\n')}`);
            }}
          >
            Generate Shopping List
          </Button>
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
    color: '#333',
  },
  ingredientsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ingredientChip: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
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
