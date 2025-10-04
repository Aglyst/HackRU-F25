import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
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
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ MealSwipe</Text>
      <Text style={styles.subtitle}>Swipe right to like, left to skip</Text>
      
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

      <View style={styles.actionButtons}>
        <Button 
          mode="outlined" 
          onPress={() => console.log('Skip')}
          style={styles.skipButton}
        >
          ❌ Skip
        </Button>
        <Button 
          mode="contained" 
          onPress={() => console.log('Like')}
          style={styles.likeButton}
        >
          ❤️ Like
        </Button>
      </View>

      <Text style={styles.likedCount}>
        Liked Meals: {likedMeals.length}
      </Text>
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
  swiperContainer: {
    height: height * 0.5,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    height: height * 0.5,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: 'white',
  },
  mealImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContent: {
    padding: 15,
    flex: 1,
  },
  mealName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  mealType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  nutritionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ingredientsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  ingredients: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  moreIngredients: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 5,
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
    marginBottom: 20,
  },
});
