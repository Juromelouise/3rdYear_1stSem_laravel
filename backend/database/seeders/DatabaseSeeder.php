<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        for ($i = 2; $i <= 11; $i++) {
            \App\Models\User::create([
                'name' => 'user ' . $i,
                'email' => 'user' . $i . '@gmail.com',
                'password' => Hash::make('password'),
            ]);
        }
    }
}
