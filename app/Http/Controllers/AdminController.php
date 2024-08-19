<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(Category::all());
        return Inertia::render('Dashboard/Admin/Admin' , [
            'auth' => auth()->user(),
            'books' => Book::all(),
            'categories' => Category::all()
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
        $validatedData = $request->validate([
            'name' => 'required|min:4|max:8',
            'author' => 'required|min:3',
            'description' => 'required:min:10',
            'category_id' => 'required'
        ]);
        dd($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $book = Book::find($id);
        $user = User::find($book->user_id);
        return Inertia::render('Dashboard/Detail', [
            'book' => $book,
            'bookedBy' => $user,
            'category' => Category::all(),
            'admin' => true
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request , $id)
    {
        // todo add validation
        $book = Book::find($id);
        $data = $request->all();
        $book->update($data);
        return to_route('admin');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // dd($id);
        Book::destroy($id);
        return to_route('admin');
    }
}
