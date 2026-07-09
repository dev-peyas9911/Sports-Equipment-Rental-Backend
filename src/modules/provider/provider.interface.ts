import { Prisma } from "../../../generated/prisma/client";
import { GearCondition } from "../../../generated/prisma/enums";



export interface IGearPayload {
//   providerId: string;
  categoryId: string;
  name: string;
  brand?: string;
  description: string;
  pricePerDay: number;
  stock: number;
  availableStock?: number;
  condition: GearCondition;
  images: string[];
  specifications?: Prisma.InputJsonValue;
}
