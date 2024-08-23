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
        return Inertia::render('Dashboard/Admin/Admin' , [
            'auth' => auth()->user(),
            'books' => Book::all(),
            'categories' => Category::all(),
            'admins' => User::where('isAdmin' , 1)->get()
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
        $isCategory = $request->get('category');
        $newAdmin = $request->get('new_admin');
        $rules = [
            'name' => 'required|min:3',
        ];
        if(!$isCategory && !$newAdmin){
            $rules['description'] = 'required|min:10';
            $rules['author'] = 'required|min:3';
            $rules['status'] = 'required';
            $rules['category_id'] = 'required';
            $rules['user_id'] = 'required';
        }
        if($isCategory){
            $rules['description'] = 'required|min:10';
        }
        if($newAdmin){
            $rules['email'] = 'required|email:dns';
            $rules['password'] = 'required|min:8';
            $rules['isAdmin'] = 'required';
        }
        $validatedData = $request->validate($rules);
        // dd($validatedData);/
        if($isCategory){
            Category::create($validatedData);
        }else if($newAdmin){
            User::create($validatedData);
        }else{
            Book::create($validatedData);
        }
        return redirect()->back()->with('success', 'submitted successfully');
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
