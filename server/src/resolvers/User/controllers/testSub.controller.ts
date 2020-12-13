import User from "src/entities/Postgres/User/User.postgres";
import { ISubscriptionResolvers, IUser } from "src/types/graphql";
import { withFilter } from "apollo-server-express";
import { PubSub } from "apollo-server-express";

export const pubsub = new PubSub();

const testController: ISubscriptionResolvers["testSubscription"] = {
  subscribe: withFilter(
    () => pubsub.asyncIterator(["POST_ADDED"]),
    (payload, variables) => {
      console.log("payload", payload);
      console.log("variables", variables);
      if (!payload) return false;
      return true;
    }
  ),
};

export default testController;
