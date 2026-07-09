import { GearItemWhereInput } from "../../../generated/prisma/models";

export interface IGearQuery extends GearItemWhereInput  {
    searchTerm?: string;
    page?: string;
    limit?: string;
    sortOrder?: string;
    sortBy?: string;
}