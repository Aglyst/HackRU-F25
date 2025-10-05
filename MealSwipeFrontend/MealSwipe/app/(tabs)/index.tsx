import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, SafeAreaView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Card, Button } from 'react-native-paper';
import { useAppContext } from '@/context/AppContext';
import { allRecipes } from '@/data/loadAllRecipes';

const { width, height } = Dimensions.get('window');

export default function MealSwipeScreen() {
  const { likedMeals, addLikedMeal } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeRight = (cardIndex) => {
    const meal = allRecipes[cardIndex];
    addLikedMeal(meal);
    console.log('Liked:', meal.name);
  };

  const handleSwipeLeft = (cardIndex) => {
    const meal = allRecipes[cardIndex];
    console.log('Disliked:', meal.name);
  };

  const renderCard = (meal) => {
    if (!meal) return null;
    
    return (
      <Card style={styles.card}>
        <View style={styles.cardInner}>
          <Image source={{ uri: meal.image }} style={styles.mealImage} />
          <Card.Content style={styles.cardContent}>
          <Text style={styles.mealName}>{meal.name}</Text>
          <Text style={styles.mealType}>{meal.type.toUpperCase()}</Text>
          
          <View style={styles.nutritionContainer}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionLabel}>Calories</Text>
              <Text style={styles.nutritionValue}>{meal.calories}</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionLabel}>Protein</Text>
              <Text style={styles.nutritionValue}>{meal.protein}g</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionLabel}>Carbs</Text>
              <Text style={styles.nutritionValue}>{meal.carbs}g</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionLabel}>Fat</Text>
              <Text style={styles.nutritionValue}>{meal.fat}g</Text>
            </View>
          </View>

          <Text style={styles.ingredientsTitle}>Key Ingredients:</Text>
          <Text style={styles.ingredients}>{meal.ingredients.slice(0, 4).join(', ')}</Text>
          {meal.ingredients.length > 4 && (
            <Text style={styles.moreIngredients}>+{meal.ingredients.length - 4} more</Text>
          )}
          </Card.Content>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
        <Text style={styles.title}>🍽️ MealSwipe</Text>
        <Text style={styles.subtitle}>Swipe right to like, left to skip</Text>
      </View>
      
      <View style={{ flex: 1, width: '100%' }}>
        <View style={styles.swiperContainer}>
          <Swiper
            cards={allRecipes}
            renderCard={renderCard}
            onSwipedRight={handleSwipeRight}
            onSwipedLeft={handleSwipeLeft}
            onSwipedAll={() => console.log('All 500 cards swiped!')}
            cardIndex={currentIndex}
            backgroundColor="transparent"
            stackSize={3}
            stackSeparation={15}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          />
        </View>
      </View>

      <View style={{ width: '100%', marginTop: 'auto' }}>
        <Text style={styles.likedCount}>
          Liked Meals: {likedMeals.length}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
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
  swiperContainer: {
    height: height * 0.5,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  cardInner: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
  mealImage: {
    width: '100%',
    height: 50, // Further reduced height
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContent: {
    padding: 10, // Reduced from 15 to make the card more compact
    flex: 1,
  },
  mealName: {
    fontSize: 16, // Reduced from 20
    fontWeight: 'bold',
    marginBottom: 1, // Reduced from 3
    color: '#333',
  },
  mealType: {
    fontSize: 10, // Reduced from 12
    color: '#666',
    marginBottom: 4, // Reduced from 8
    textTransform: 'capitalize',
  },
  nutritionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 3, // Reduced from 5
    paddingVertical: 3, // Reduced from 5
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  nutritionItem: {
    alignItems: 'center',
    marginBottom: 1, // Reduced from 2
  },
  nutritionLabel: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  nutritionValue: {
    fontSize: 12, // Reduced from 14
    fontWeight: 'bold',
    color: '#333',
  },
  ingredientsTitle: {
    fontSize: 12, // Reduced from 16
    fontWeight: '600',
    marginBottom: 3,
    color: '#333',
  },
  ingredients: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  moreIngredients: {
    fontSize: 10,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 3,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  skipButton: {
    borderColor: '#ff6b6b',
    borderWidth: 2,
  },
  likeButton: {
    backgroundColor: '#51cf66',
  },
  likedCount: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    width: '100%',
  },
});
