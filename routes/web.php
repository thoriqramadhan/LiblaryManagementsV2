<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookedBooksController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Gate;
use App\Http\Controllers\ListBookResource;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'auth' => auth()->user()
    ]);
})->name('welcome');


Route::middleware('auth')->group(function(){
    Route::resource('/dashboard', ListBookResource::class)
    ->name('index','dashboard');
    Route::put('/dashboard/return-books/{id}' , [BookedBooksController::class, 'update']);
});

Route::middleware(['auth','can:admins'])->group(function(){
    Route::resource('/admins', AdminController::class)->name('index' , 'admin');
}); 


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test' , function(){
    return Inertia::render('test');
});
require __DIR__.'/auth.php';
