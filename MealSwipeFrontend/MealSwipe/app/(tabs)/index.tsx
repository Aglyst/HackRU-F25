import React, { useEffect, useState, useMemo } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, SafeAreaView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Card, Button } from 'react-native-paper';
import { useAppContext } from '@/context/AppContext';
import { allRecipes } from '@/data/loadAllRecipes';
import { Meal } from '@/data/mealsData';

const { width, height } = Dimensions.get('window');

interface NutritionFilters {
  highProtein: boolean;
  lowCarb: boolean;
  lowFat: boolean;
  highCalories: boolean;
}

interface DietaryFilters {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
}

interface MealTypeFilters {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
}

export default function MealSwipeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    likedMeals,
    addLikedMeal,
    mealTypeFilters,
    nutritionFilters,
    dietaryFilters,
  } = useAppContext();

  // Filter recipes based on selected filters
  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((meal: Meal) => {
      // Filter by meal type
      const mealTypeKey = meal.type as keyof MealTypeFilters;
      if (Object.values(mealTypeFilters).some(Boolean) && !mealTypeFilters[mealTypeKey]) {
        return false;
      }

      // Filter by nutrition
      if (nutritionFilters.highProtein && meal.protein < 25) return false;
      if (nutritionFilters.lowCarb && meal.carbs > 50) return false;
      if (nutritionFilters.lowFat && meal.fat > 15) return false;
      if (nutritionFilters.highCalories && meal.calories < 500) return false;

      // Filter by dietary restrictions
      const restrictions = meal.dietaryRestrictions || [];
      if (dietaryFilters.vegetarian && !restrictions.includes('vegetarian')) return false;
      if (dietaryFilters.vegan && !restrictions.includes('vegan')) return false;
      if (dietaryFilters.glutenFree && !restrictions.includes('gluten-free')) return false;
      if (dietaryFilters.dairyFree && !restrictions.includes('dairy-free')) return false;

      return true;
    });
  }, [allRecipes, mealTypeFilters, nutritionFilters, dietaryFilters]);

  // Reset swiper index when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredRecipes]);

  const handleSwipeRight = (cardIndex: number) => {
    const meal = filteredRecipes[cardIndex];
    addLikedMeal(meal);
    console.log('Liked:', meal.name);
  };

  const handleSwipeLeft = (cardIndex: number) => {
    const meal = filteredRecipes[cardIndex];
    console.log('Disliked:', meal.name);
  };

  const renderCard = (meal: Meal | null) => {
    if (!meal) {
      return (
        <View style={[styles.card, { backgroundColor: '#ffebee', justifyContent: 'center', alignItems: 'center' }]}>
          <Text>No meal data available</Text>
        </View>
      );
    }
    
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
          {filteredRecipes.length > 0 ? (
            <Swiper
              cards={filteredRecipes}
              renderCard={renderCard}
              onSwipedRight={handleSwipeRight}
              onSwipedLeft={handleSwipeLeft}
              onSwiped={(cardIndex) => setCurrentIndex(cardIndex + 1)}
              cardIndex={currentIndex}
              backgroundColor="transparent"
              stackSize={3}
              stackScale={10}
              stackSeparation={14}
              disableBottomSwipe
              disableTopSwipe
              verticalSwipe={false}
              infinite
              containerStyle={styles.swiperContainer}
              cardStyle={styles.card}
              cardVerticalMargin={0}
              cardHorizontalMargin={0}
              overlayLabels={{
                left: {
                  title: 'NOPE',
                  style: {
                    label: {
                      backgroundColor: '#ff5252',
                      borderColor: '#ff5252',
                      color: 'white',
                      borderWidth: 1,
                      fontSize: 24,
                      fontWeight: 'bold',
                      borderRadius: 10,
                      padding: 10,
                      overflow: 'hidden',
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: -30,
                    },
                  },
                },
                right: {
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: '#4CAF50',
                      borderColor: '#4CAF50',
                      color: 'white',
                      borderWidth: 1,
                      fontSize: 24,
                      fontWeight: 'bold',
                      borderRadius: 10,
                      padding: 10,
                      overflow: 'hidden',
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: 30,
                    },
                  },
                },
              }}
            />
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>No recipes match your current filters.</Text>
              <Button 
                mode="contained" 
                onPress={() => {
                  // Reset filters or navigate to filters screen
                }}
                style={styles.resetButton}
              >
                Reset Filters
              </Button>
            </View>
          )}
        </View>
      </View>
      
      {/* Liked Meals Counter */}
      <View style={styles.likedCounterContainer}>
        <Text style={styles.likedCounterText}>
          {likedMeals.length} {likedMeals.length === 1 ? 'Meal' : 'Meals'} Liked
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
    position: 'relative',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  swiperContainer: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: '100%',
    height: height * 0.6 - 50, // 60% of screen height minus 50 units
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
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
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  likedCounterContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 10,
  },
  likedCounterText: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  noResultsText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  resetButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
  },
});
