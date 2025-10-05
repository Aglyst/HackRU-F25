import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, SafeAreaView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Card, Button } from 'react-native-paper';
import { useAppContext } from '@/context/AppContext';
import { allRecipes } from '@/data/loadAllRecipes';

const { width, height } = Dimensions.get('window');

export default function MealSwipeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    likedMeals,
    addLikedMeal,
    mealTypeFilters,
    nutritionFilters,
    dietaryFilters,
    setMealTypeFilters,
    setNutritionFilters,
    setDietaryFilters
  } = useAppContext();

  // useEffect(() => {
  //   console.log('Meal Type Filters Set:', mealTypeFilters);
  //   console.log('Nutrition Filters Set:', nutritionFilters);
  //   console.log('Dietary Filters Set:', dietaryFilters);
  
  // }, [mealTypeFilters, nutritionFilters, dietaryFilters]);
  

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
    if (!meal) {
      console.log('No meal data received');
      return (
        <View style={[styles.card, { backgroundColor: '#ffebee', justifyContent: 'center', alignItems: 'center' }]}>
          <Text>No meal data available</Text>
        </View>
      );
    }
    
    console.log('Rendering meal:', {
      name: meal.name,
      image: meal.image,
      type: meal.type,
      calories: meal.calories,
      hasImage: !!meal.image
    });
    
    return (
      <View style={styles.card}>
        <View style={styles.cardInner}>
          <View style={styles.imageContainer}>
            {meal.image ? (
              <Image 
                source={{ uri: meal.image }} 
                style={styles.mealImage} 
                resizeMode="cover"
                onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
              />
            ) : (
              <View style={styles.placeholderImage}>
                <Text>No Image Available</Text>
              </View>
            )}
          </View>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.mealName} numberOfLines={2}>{meal.name || 'No Name'}</Text>
              {meal.type && (
                <Text style={styles.mealType}>{meal.type.toUpperCase()}</Text>
              )}
            </View>
            
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

            <View>
              <Text style={styles.ingredientsTitle}>Key Ingredients:</Text>
              <Text style={styles.ingredients} numberOfLines={2}>
                {meal.ingredients.slice(0, 4).join(', ')}
                {meal.ingredients.length > 4 && (
                  <Text style={styles.moreIngredients}>
                    {' '}+{meal.ingredients.length - 4} more
                  </Text>
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  console.log('All recipes count:', allRecipes.length);
  console.log('First recipe:', allRecipes[0]);
  
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
        <Text style={styles.title}>🍽️ MealSwipe</Text>
        <Text style={styles.subtitle}>Swipe right to like, left to skip</Text>
      </View>
      
      <View style={{ flex: 1, width: '100%' }}>
        <View style={styles.swiperContainer}>
          <Swiper
            cards={allRecipes.length > 0 ? allRecipes : [{
              id: -1,
              name: 'No recipes found',
              image: 'https://via.placeholder.com/300x200?text=No+Recipes',
              type: 'error',
              calories: 0,
              protein: 0,
              carbs: 0,
              fat: 0,
              ingredients: []
            }]}
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
    backgroundColor: '#f8f9fa',
    padding: 0,
    paddingTop: 20,
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
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: -40, // Move cards up by 40 units
    marginTop: -40,  // Compensate for the negative padding
  },
  card: {
    width: '100%',
    aspectRatio: 0.75, // Better for swiping
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  cardInner: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
  },
  mealImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  mealName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  mealDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 18,
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
