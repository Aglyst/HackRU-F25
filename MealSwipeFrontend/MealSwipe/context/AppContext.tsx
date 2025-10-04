import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Meal {
  id: number;
  name: string;
  image: string;
  type: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
}

interface AppContextType {
  likedMeals: Meal[];
  addLikedMeal: (meal: Meal) => void;
  removeLikedMeal: (mealId: number) => void;
  removedIngredients: { [mealId: number]: string[] };
  removeIngredient: (mealId: number, ingredient: string) => void;
  addIngredient: (mealId: number, ingredient: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [likedMeals, setLikedMeals] = useState<Meal[]>([]);
  const [removedIngredients, setRemovedIngredients] = useState<{ [mealId: number]: string[] }>({});

  const addLikedMeal = (meal: Meal) => {
    setLikedMeals(prev => {
      // Check if meal is already liked
      if (prev.some(m => m.id === meal.id)) {
        return prev;
      }
      return [...prev, meal];
    });
  };

  const removeLikedMeal = (mealId: number) => {
    setLikedMeals(prev => prev.filter(meal => meal.id !== mealId));
    // Also remove any removed ingredients for this meal
    setRemovedIngredients(prev => {
      const newRemoved = { ...prev };
      delete newRemoved[mealId];
      return newRemoved;
    });
  };

  const removeIngredient = (mealId: number, ingredient: string) => {
    setRemovedIngredients(prev => ({
      ...prev,
      [mealId]: [...(prev[mealId] || []), ingredient]
    }));
  };

  const addIngredient = (mealId: number, ingredient: string) => {
    setRemovedIngredients(prev => ({
      ...prev,
      [mealId]: (prev[mealId] || []).filter(ing => ing !== ingredient)
    }));
  };

  const value: AppContextType = {
    likedMeals,
    addLikedMeal,
    removeLikedMeal,
    removedIngredients,
    removeIngredient,
    addIngredient,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
