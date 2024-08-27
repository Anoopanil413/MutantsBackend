import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';


export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'The roles a user can have', 
})

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field({  })
  userName?: string;

  @Field({ })
  email?: string;

  @Field(type => UserRole)
  role: UserRole;

}
