export interface Expense {
  id: number;
  userId: number; 
  Category: string;
  amount: number;
  category: string; 
  date: Date;
  isRecurring: boolean;
  recurringFrequency?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}