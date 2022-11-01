<?php

namespace App\Http\Controllers\Support;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class PingAPIController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'type'    => 'success',
            'message' => 'pong',
        ]);
    }
}

