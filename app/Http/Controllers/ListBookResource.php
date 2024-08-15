<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use App\Models\User;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ListBookResource extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::withCount('books')->get();
        // dd($book);
        return Inertia::render('Dashboard/Dashboard', [
            'books' => Book::all(),
            'bookCategories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $book = Book::find($id);
        // dd($book);
        return Inertia::render('Dashboard/Detail', [
            'book' => $book]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $book = Book::find($id);
        $newBook = [
            'name' => $request->name,
            'author' => $request->author,
            'description' => $request->description,
            'status' => 1,
            'return_at' => $request->returnAt,
            'user_id' => $request->user_id
        ];
        Book::where('id', $id)->update($newBook);

        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
