<?php
namespace App\Actions\Users;

use App\Models\Users\User;
use App\DTO\Users\CreateUserData;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;

class CreateNewUserAction extends Controller
{
    public function __invoke(CreateUserData $data): User
    {
        // Create user
        $user = $this->createUser($data);

        // Mark as verified if verification is disabled
        if (! $data->password || ! intval(get_settings('user_verification'))) {
            $user->markEmailAsVerified();
        }

        return $user;
    }

    private function createUser(CreateUserData $data): User
    {
        $user = User::create([
            'password'       => $data->password ? bcrypt($data->password) : null,
            'oauth_provider' => $data->oauth_provider,
            'email'          => $data->email,
        ]);

        // Split username
        $name = split_name($data->name);

        // Store user data
        $user->settings()->create([
            'first_name' => $name['first_name'],
            'last_name'  => $name['last_name'],
            'avatar'     => $data->avatar,
        ]);

        return $user;
    }
}
