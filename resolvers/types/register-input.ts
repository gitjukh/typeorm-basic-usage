import { InputType, Field } from "type-graphql";

import { User } from "../../entities/user";

@InputType()
export class RegisterInput implements Partial<User> {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
