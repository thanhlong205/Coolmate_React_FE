import { number } from 'yup';

export interface PickupAddress {
  name: string;
  mobile: string;
  pinCode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
}

export interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
}
export interface BusinessDetails {
  businessName: string;
}

export interface Seller {
  id?: number;
  mobile: string;
  otp: string;
  gstin: string;
  pickupAddress: PickupAddress;
  bankDeatails: BankDetails;
  sellerName: string;
  email: string;
  businessDetails: BusinessDetails;

  password: string;
  accountStatus?: string;
}

export interface sellerReport {
  id: number;
  seller: Seller;
  tottalEarnings: number;
  totalSales: number;
  totalRefunds: number;
  totalTax: number;
  netEarnings: number;
  totalOrders: number;
  canceledOrders: number;
  totalTransactions: number;
}
