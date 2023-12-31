<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = Post::all();
        return response()->json($post);
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
        // return response()->json($request->all());
        $post = new Post();
        $post->title =  $request->title;
        $post->slug =  $request->slug;
        $post->content =  $request->content;
        $post->user_id =  $request->user;
        $post->save();
        return response()->json(['data'=>$post, 'status'=>'post saved', 'code' => 201]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = Post::with('user')->where('id', $id)->first();
        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $post = Post::find($id);
        $post->title =  $request->title;
        $post->slug =  $request->slug;
        $post->content =  $request->content;
        $post->user_id =  '1';
        $post->save();
        return response()->json(['status'=>'post updated', 'code' => 201]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Post::destroy($id);
        return response()->json(['status'=>'Post Deleted', 'Code' => 201]);
    }
}
