import fetchMeController from "./controllers/fetchMe.controller";
import loginUserController from "./controllers/loginUser.controller";
import createUserController from "./controllers/createUser.controller";
import testSubscriptionController from "./controllers/testSub.controller";
import { IResolvers } from "src/types/graphql";

const resolvers: IResolvers = {
  Query: {
    fetchMe: fetchMeController,
  },
  Mutation: {
    createUser: createUserController,
    loginUser: loginUserController,
  },
  Subscription: {
    testSubscription: testSubscriptionController,
  },
};

export default resolvers;
