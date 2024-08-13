<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->words(random_int(1,3),true),
            'author' => fake()->name(),
            'description' => fake()->paragraph(random_int(1,2)),
            'status' => random_int(0,1),
            'category_id' => random_int(1,2),
            'user_id' => random_int(0,1)
        ];
    }
}
