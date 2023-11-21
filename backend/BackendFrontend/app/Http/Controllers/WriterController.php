<?php

namespace App\Http\Controllers;

use App\Models\Writers;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index(){
        $writers = response()->json(Writers::all());
        return $writers;
     }
  
     public function store(Request $request){
         $writer = new Writers();
         $writer->nev = $request->nev;
         $writer->szul = $request->szul;
         $writer->save();
         return Writers::find($writer->id);
        
     }
  
     public function destroy($id){
         $writer = Writers::find($id)->delete();
         return response()->json(['message' => 'Sikeres törlés!'], 201);
     }
  
     public function update(Request $request, $id){
         $writer = Writers::find($id);
         $writer->nev = $request->nev;
         $writer->szul = $request->szul;
         $writer->save();
         //return redirect('/api/writers');
     }
}
