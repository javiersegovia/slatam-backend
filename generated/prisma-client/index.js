"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "UserRole",
    embedded: false
  },
  {
    name: "CompanyRole",
    embedded: false
  },
  {
    name: "OrderStatus",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Company",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "OrderItem",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_MANAGEMENT_API_SECRET"]}`
});
exports.prisma = new exports.Prisma();
