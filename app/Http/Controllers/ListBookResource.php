<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use App\Models\User;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Psy\Readline\Hoa\Console;

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
    public function show(Request $request, $id)
    {   
        $book = Book::find($id);
        $user = User::find($book->user_id);
        return Inertia::render('Dashboard/Detail', [
            'book' => $book,
            'bookedBy' => $user
        ]);
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
        // dd(isset($request->booked));
        $newBook = [
            'name' => $request->name,
            'author' => $request->author,
            'description' => $request->description,
            'status' => 1,
            'return_at' => $request->return_at,
            'user_id' => $request->user_id
        ];
        if(isset($request->booked)){
            // dd($newBook);
            $newBook['status'] = 0;
            $newBook['return_at'] = null;
            $newBook['user_id'] = 0;
        }
        // dd($newBook);
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
