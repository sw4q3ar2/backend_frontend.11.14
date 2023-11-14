<?php

namespace App\Http\Controllers;

use App\Models\Writers;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index()
    {
        $writers = Writers::all();
        return response()->json($writers);
    }

    public function store(Request $request)
    {
        $record = new Writers();
        $record->nev = $request->nev;
        $record->szul = $request->szul;
        $record->save();
        return Writers::find($record->id);
    }

    public function destroy($id)
    {
        $writer = Writers::find($id)->delete();
        return response()->json(['message' => 'sikeres törlés!'], 201); 
    }

    public function update(Request $request, $id)
    {
        $writer = Writers::find($id);
        $writer->nev = $request->nev;
        $writer->szul = $request->szul;
        $writer->save();
        return redirect('/writers');
    }
}
