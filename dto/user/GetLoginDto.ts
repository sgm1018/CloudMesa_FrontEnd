import { UserDto } from "./UserDto";

export class GetLoginDto extends UserDto {
  token! : string;
}
