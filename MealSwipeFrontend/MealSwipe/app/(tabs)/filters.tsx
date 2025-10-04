import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Card, Button, Chip, Switch, List } from 'react-native-paper';

export default function FiltersScreen() {
  const [mealTypeFilters, setMealTypeFilters] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  const [nutritionFilters, setNutritionFilters] = useState({
    highProtein: false,
    lowCarb: false,
    lowFat: false,
    highCalories: false,
  });

  const [dietaryFilters, setDietaryFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
  });

  const toggleMealType = (type: string) => {
    setMealTypeFilters(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const toggleNutrition = (filter: string) => {
    setNutritionFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const toggleDietary = (filter: string) => {
    setDietaryFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const clearAllFilters = () => {
    setMealTypeFilters({ breakfast: false, lunch: false, dinner: false });
    setNutritionFilters({ highProtein: false, lowCarb: false, lowFat: false, highCalories: false });
    setDietaryFilters({ vegetarian: false, vegan: false, glutenFree: false, dairyFree: false });
  };

  const applyFilters = () => {
    console.log('Applying filters:', {
      mealType: mealTypeFilters,
      nutrition: nutritionFilters,
      dietary: dietaryFilters
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Filters</Text>
      <Text style={styles.subtitle}>Customize your meal preferences</Text>

      <ScrollView style={styles.scrollView}>
        {/* Meal Type Filters */}
        <Card style={styles.filterCard}>
          <Card.Content>
            <Text style={styles.filterTitle}>🍽️ Meal Type</Text>
            <View style={styles.chipContainer}>
              <Chip
                selected={mealTypeFilters.breakfast}
                onPress={() => toggleMealType('breakfast')}
                style={styles.chip}
              >
                Breakfast
              </Chip>
              <Chip
                selected={mealTypeFilters.lunch}
                onPress={() => toggleMealType('lunch')}
                style={styles.chip}
              >
                Lunch
              </Chip>
              <Chip
                selected={mealTypeFilters.dinner}
                onPress={() => toggleMealType('dinner')}
                style={styles.chip}
              >
                Dinner
              </Chip>
            </View>
          </Card.Content>
        </Card>

        {/* Nutrition Filters */}
        <Card style={styles.filterCard}>
          <Card.Content>
            <Text style={styles.filterTitle}>📊 Nutrition</Text>
            <View style={styles.chipContainer}>
              <Chip
                selected={nutritionFilters.highProtein}
                onPress={() => toggleNutrition('highProtein')}
                style={styles.chip}
              >
                High Protein
              </Chip>
              <Chip
                selected={nutritionFilters.lowCarb}
                onPress={() => toggleNutrition('lowCarb')}
                style={styles.chip}
              >
                Low Carb
              </Chip>
              <Chip
                selected={nutritionFilters.lowFat}
                onPress={() => toggleNutrition('lowFat')}
                style={styles.chip}
              >
                Low Fat
              </Chip>
              <Chip
                selected={nutritionFilters.highCalories}
                onPress={() => toggleNutrition('highCalories')}
                style={styles.chip}
              >
                High Calories
              </Chip>
            </View>
          </Card.Content>
        </Card>

        {/* Dietary Restrictions */}
        <Card style={styles.filterCard}>
          <Card.Content>
            <Text style={styles.filterTitle}>🥗 Dietary Restrictions</Text>
            <View style={styles.chipContainer}>
              <Chip
                selected={dietaryFilters.vegetarian}
                onPress={() => toggleDietary('vegetarian')}
                style={styles.chip}
              >
                Vegetarian
              </Chip>
              <Chip
                selected={dietaryFilters.vegan}
                onPress={() => toggleDietary('vegan')}
                style={styles.chip}
              >
                Vegan
              </Chip>
              <Chip
                selected={dietaryFilters.glutenFree}
                onPress={() => toggleDietary('glutenFree')}
                style={styles.chip}
              >
                Gluten Free
              </Chip>
              <Chip
                selected={dietaryFilters.dairyFree}
                onPress={() => toggleDietary('dairyFree')}
                style={styles.chip}
              >
                Dairy Free
              </Chip>
            </View>
          </Card.Content>
        </Card>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Button 
            mode="outlined" 
            onPress={clearAllFilters}
            style={styles.clearButton}
          >
            Clear All
          </Button>
          <Button 
            mode="contained" 
            onPress={applyFilters}
            style={styles.applyButton}
          >
            Apply Filters
          </Button>
        </View>
      </ScrollView>
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
  filterCard: {
    marginBottom: 20,
    borderRadius: 15,
    elevation: 3,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    gap: 15,
  },
  clearButton: {
    flex: 1,
    borderColor: '#ff6b6b',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#51cf66',
  },
});
