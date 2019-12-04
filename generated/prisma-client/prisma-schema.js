module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCompany {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Company {
  id: ID!
  owner: User!
  name: String!
  companyRole: [CompanyRole!]!
  country: String
  city: String
  postalCode: Int
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CompanyConnection {
  pageInfo: PageInfo!
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreatecompanyRoleInput {
  set: [CompanyRole!]
}

input CompanyCreateInput {
  id: ID
  owner: UserCreateOneInput!
  name: String!
  companyRole: CompanyCreatecompanyRoleInput
  country: String
  city: String
  postalCode: Int
  members: UserCreateManyWithoutCompanyInput
  items: ItemCreateManyWithoutOwnerInput
}

input CompanyCreateOneInput {
  create: CompanyCreateInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutItemsInput {
  create: CompanyCreateWithoutItemsInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutMembersInput {
  create: CompanyCreateWithoutMembersInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutItemsInput {
  id: ID
  owner: UserCreateOneInput!
  name: String!
  companyRole: CompanyCreatecompanyRoleInput
  country: String
  city: String
  postalCode: Int
  members: UserCreateManyWithoutCompanyInput
}

input CompanyCreateWithoutMembersInput {
  id: ID
  owner: UserCreateOneInput!
  name: String!
  companyRole: CompanyCreatecompanyRoleInput
  country: String
  city: String
  postalCode: Int
  items: ItemCreateManyWithoutOwnerInput
}

type CompanyEdge {
  node: Company!
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  country_ASC
  country_DESC
  city_ASC
  city_DESC
  postalCode_ASC
  postalCode_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompanyPreviousValues {
  id: ID!
  name: String!
  companyRole: [CompanyRole!]!
  country: String
  city: String
  postalCode: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum CompanyRole {
  SUPPLIER
  BUYER
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
  AND: [CompanySubscriptionWhereInput!]
  OR: [CompanySubscriptionWhereInput!]
  NOT: [CompanySubscriptionWhereInput!]
}

input CompanyUpdatecompanyRoleInput {
  set: [CompanyRole!]
}

input CompanyUpdateDataInput {
  owner: UserUpdateOneRequiredInput
  name: String
  companyRole: CompanyUpdatecompanyRoleInput
  country: String
  city: String
  postalCode: Int
  members: UserUpdateManyWithoutCompanyInput
  items: ItemUpdateManyWithoutOwnerInput
}

input CompanyUpdateInput {
  owner: UserUpdateOneRequiredInput
  name: String
  companyRole: CompanyUpdatecompanyRoleInput
  country: String
  city: String
  postalCode: Int
  members: UserUpdateManyWithoutCompanyInput
  items: ItemUpdateManyWithoutOwnerInput
}

input CompanyUpdateManyMutationInput {
  name: String
  companyRole: CompanyUpdatecompanyRoleInput
  country: String
  city: String
  postalCode: Int
}

input CompanyUpdateOneRequiredInput {
  create: CompanyCreateInput
  update: CompanyUpdateDataInput
  upsert: CompanyUpsertNestedInput
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateOneRequiredWithoutItemsInput {
  create: CompanyCreateWithoutItemsInput
  update: CompanyUpdateWithoutItemsDataInput
  upsert: CompanyUpsertWithoutItemsInput
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateOneWithoutMembersInput {
  create: CompanyCreateWithoutMembersInput
  update: CompanyUpdateWithoutMembersDataInput
  upsert: CompanyUpsertWithoutMembersInput
  delete: Boolean
  disconnect: Boolean
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateWithoutItemsDataInput {
  owner: UserUpdateOneRequiredInput
  name: String
  companyRole: CompanyUpdatecompanyRoleInput
  country: String
  city: String
  postalCode: Int
  members: UserUpdateManyWithoutCompanyInput
}

input CompanyUpdateWithoutMembersDataInput {
  owner: UserUpdateOneRequiredInput
  name: String
  companyRole: CompanyUpdatecompanyRoleInput
  country: String
  city: String
  postalCode: Int
  items: ItemUpdateManyWithoutOwnerInput
}

input CompanyUpsertNestedInput {
  update: CompanyUpdateDataInput!
  create: CompanyCreateInput!
}

input CompanyUpsertWithoutItemsInput {
  update: CompanyUpdateWithoutItemsDataInput!
  create: CompanyCreateWithoutItemsInput!
}

input CompanyUpsertWithoutMembersInput {
  update: CompanyUpdateWithoutMembersDataInput!
  create: CompanyCreateWithoutMembersInput!
}

input CompanyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owner: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  postalCode: Int
  postalCode_not: Int
  postalCode_in: [Int!]
  postalCode_not_in: [Int!]
  postalCode_lt: Int
  postalCode_lte: Int
  postalCode_gt: Int
  postalCode_gte: Int
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CompanyWhereInput!]
  OR: [CompanyWhereInput!]
  NOT: [CompanyWhereInput!]
}

input CompanyWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

type Item {
  id: ID!
  title: String!
  description: String!
  sku: String
  price: Int!
  owner: Company!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  id: ID
  title: String!
  description: String!
  sku: String
  price: Int!
  owner: CompanyCreateOneWithoutItemsInput!
}

input ItemCreateManyInput {
  create: [ItemCreateInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateManyWithoutOwnerInput {
  create: [ItemCreateWithoutOwnerInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateWithoutOwnerInput {
  id: ID
  title: String!
  description: String!
  sku: String
  price: Int!
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  sku_ASC
  sku_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  title: String!
  description: String!
  sku: String
  price: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ItemScalarWhereInput!]
  OR: [ItemScalarWhereInput!]
  NOT: [ItemScalarWhereInput!]
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateDataInput {
  title: String
  description: String
  sku: String
  price: Int
  owner: CompanyUpdateOneRequiredWithoutItemsInput
}

input ItemUpdateInput {
  title: String
  description: String
  sku: String
  price: Int
  owner: CompanyUpdateOneRequiredWithoutItemsInput
}

input ItemUpdateManyDataInput {
  title: String
  description: String
  sku: String
  price: Int
}

input ItemUpdateManyInput {
  create: [ItemCreateInput!]
  update: [ItemUpdateWithWhereUniqueNestedInput!]
  upsert: [ItemUpsertWithWhereUniqueNestedInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyMutationInput {
  title: String
  description: String
  sku: String
  price: Int
}

input ItemUpdateManyWithoutOwnerInput {
  create: [ItemCreateWithoutOwnerInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateWithoutOwnerDataInput {
  title: String
  description: String
  sku: String
  price: Int
}

input ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateDataInput!
}

input ItemUpdateWithWhereUniqueWithoutOwnerInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutOwnerDataInput!
}

input ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemUpsertWithWhereUniqueWithoutOwnerInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutOwnerDataInput!
  create: ItemCreateWithoutOwnerInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  owner: CompanyWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCompany(data: CompanyCreateInput!): Company!
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  updateOrderItem(data: OrderItemUpdateInput!, where: OrderItemWhereUniqueInput!): OrderItem
  updateManyOrderItems(data: OrderItemUpdateManyMutationInput!, where: OrderItemWhereInput): BatchPayload!
  upsertOrderItem(where: OrderItemWhereUniqueInput!, create: OrderItemCreateInput!, update: OrderItemUpdateInput!): OrderItem!
  deleteOrderItem(where: OrderItemWhereUniqueInput!): OrderItem
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  status: OrderStatus!
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  supplier: Company!
  buyer: User!
  totalPrice: Int!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  status: OrderStatus!
  items: OrderItemCreateManyInput
  supplier: CompanyCreateOneInput!
  buyer: UserCreateOneInput!
  totalPrice: Int!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type OrderItem {
  id: ID!
  title: String!
  description: String!
  sku: String
  price: Int!
  owner: Company!
  quantity: Int!
}

type OrderItemConnection {
  pageInfo: PageInfo!
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  id: ID
  title: String!
  description: String!
  sku: String
  price: Int!
  owner: CompanyCreateOneInput!
  quantity: Int
}

input OrderItemCreateManyInput {
  create: [OrderItemCreateInput!]
  connect: [OrderItemWhereUniqueInput!]
}

type OrderItemEdge {
  node: OrderItem!
  cursor: String!
}

enum OrderItemOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  sku_ASC
  sku_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
}

type OrderItemPreviousValues {
  id: ID!
  title: String!
  description: String!
  sku: String
  price: Int!
  quantity: Int!
}

input OrderItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [OrderItemScalarWhereInput!]
  OR: [OrderItemScalarWhereInput!]
  NOT: [OrderItemScalarWhereInput!]
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
  AND: [OrderItemSubscriptionWhereInput!]
  OR: [OrderItemSubscriptionWhereInput!]
  NOT: [OrderItemSubscriptionWhereInput!]
}

input OrderItemUpdateDataInput {
  title: String
  description: String
  sku: String
  price: Int
  owner: CompanyUpdateOneRequiredInput
  quantity: Int
}

input OrderItemUpdateInput {
  title: String
  description: String
  sku: String
  price: Int
  owner: CompanyUpdateOneRequiredInput
  quantity: Int
}

input OrderItemUpdateManyDataInput {
  title: String
  description: String
  sku: String
  price: Int
  quantity: Int
}

input OrderItemUpdateManyInput {
  create: [OrderItemCreateInput!]
  update: [OrderItemUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderItemUpsertWithWhereUniqueNestedInput!]
  delete: [OrderItemWhereUniqueInput!]
  connect: [OrderItemWhereUniqueInput!]
  set: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  deleteMany: [OrderItemScalarWhereInput!]
  updateMany: [OrderItemUpdateManyWithWhereNestedInput!]
}

input OrderItemUpdateManyMutationInput {
  title: String
  description: String
  sku: String
  price: Int
  quantity: Int
}

input OrderItemUpdateManyWithWhereNestedInput {
  where: OrderItemScalarWhereInput!
  data: OrderItemUpdateManyDataInput!
}

input OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateDataInput!
}

input OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateDataInput!
  create: OrderItemCreateInput!
}

input OrderItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  owner: CompanyWhereInput
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [OrderItemWhereInput!]
  OR: [OrderItemWhereInput!]
  NOT: [OrderItemWhereInput!]
}

input OrderItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  totalPrice_ASC
  totalPrice_DESC
}

type OrderPreviousValues {
  id: ID!
  status: OrderStatus!
  totalPrice: Int!
}

enum OrderStatus {
  PENDING
  PROCESSING
  CANCELLED
  DECLINED
  COMPLETED
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  status: OrderStatus
  items: OrderItemUpdateManyInput
  supplier: CompanyUpdateOneRequiredInput
  buyer: UserUpdateOneRequiredInput
  totalPrice: Int
}

input OrderUpdateManyMutationInput {
  status: OrderStatus
  totalPrice: Int
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  supplier: CompanyWhereInput
  buyer: UserWhereInput
  totalPrice: Int
  totalPrice_not: Int
  totalPrice_in: [Int!]
  totalPrice_not_in: [Int!]
  totalPrice_lt: Int
  totalPrice_lte: Int
  totalPrice_gt: Int
  totalPrice_gte: Int
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  company(where: CompanyWhereUniqueInput!): Company
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderItem(where: OrderItemWhereUniqueInput!): OrderItem
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  role: [UserRole!]!
  phone: String
  company: Company
  favoriteItems(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  resetToken: String
  resetTokenExpiry: Float
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  role: UserCreateroleInput
  phone: String
  company: CompanyCreateOneWithoutMembersInput
  favoriteItems: ItemCreateManyInput
  resetToken: String
  resetTokenExpiry: Float
}

input UserCreateManyWithoutCompanyInput {
  create: [UserCreateWithoutCompanyInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateroleInput {
  set: [UserRole!]
}

input UserCreateWithoutCompanyInput {
  id: ID
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  role: UserCreateroleInput
  phone: String
  favoriteItems: ItemCreateManyInput
  resetToken: String
  resetTokenExpiry: Float
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  phone_ASC
  phone_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  role: [UserRole!]!
  phone: String
  resetToken: String
  resetTokenExpiry: Float
}

enum UserRole {
  MODERATOR
  SUPPLIER
  BUYER
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  role: UserUpdateroleInput
  phone: String
  company: CompanyUpdateOneWithoutMembersInput
  favoriteItems: ItemUpdateManyInput
  resetToken: String
  resetTokenExpiry: Float
}

input UserUpdateInput {
  email: String
  password: String
  firstName: String
  lastName: String
  role: UserUpdateroleInput
  phone: String
  company: CompanyUpdateOneWithoutMembersInput
  favoriteItems: ItemUpdateManyInput
  resetToken: String
  resetTokenExpiry: Float
}

input UserUpdateManyDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  role: UserUpdateroleInput
  phone: String
  resetToken: String
  resetTokenExpiry: Float
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  firstName: String
  lastName: String
  role: UserUpdateroleInput
  phone: String
  resetToken: String
  resetTokenExpiry: Float
}

input UserUpdateManyWithoutCompanyInput {
  create: [UserCreateWithoutCompanyInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCompanyInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateroleInput {
  set: [UserRole!]
}

input UserUpdateWithoutCompanyDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  role: UserUpdateroleInput
  phone: String
  favoriteItems: ItemUpdateManyInput
  resetToken: String
  resetTokenExpiry: Float
}

input UserUpdateWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCompanyDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCompanyDataInput!
  create: UserCreateWithoutCompanyInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  company: CompanyWhereInput
  favoriteItems_every: ItemWhereInput
  favoriteItems_some: ItemWhereInput
  favoriteItems_none: ItemWhereInput
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    