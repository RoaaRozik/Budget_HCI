export interface Budget {
  id: number;
  userId: number;
  month: string;
  Year: number;
  category: BudgetCategory[];
  TotalIncome: number;
  TotalExpenses: number;

}

export interface BudgetCategory {
  id: number;
  name: string;
  limit: number;
  spent: number; // URL or icon class
}