export type SalesAnalytics = {
  totalRevenue: number;
  averageSalesCycle: number;
  averageContractSize: number;
  winRate: number;
  sales: Sale[];
};

export type Sale = {
  _id: string;
  userId: string;
  chatId: string;
  salesProcessPerformers: SalesProcessPerformer[];
  createdAt: string;
  updatedAt: string;
  companyName: string;
  companyOverview: string;
  companyIndustry: string;
  companySubIndustry: string;
  buyerTitle: string;
  productsSold: string;
  contractSize: string;
  contractTerm: string;
  primaryUseCases: string;
  contractStartDate: string;
  contractEndDate: string;
  leadOrigination: string;
  keyPurchasingReason: string;
  keyCompetitors: string;
  salesCycle: string;
};

export type SalesProcessPerformer = {
  stage: string;
  performerName: string;
  performerTitle?: string;
  contribution?: string;
  _id: string;
};
