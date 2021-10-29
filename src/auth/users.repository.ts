import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentiaslDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentiaslDto;

    const user = this.create({
      username,
      password,
    });

    await this.save(user);
  }
}
