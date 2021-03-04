<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDeletedAtToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->text('auth_token')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamp('last_signin')->nullable();

            $table->string('directory')->nullable();
            $table->string('filename')->nullable();
            $table->string('original_filename')->nullable();
            $table->integer('filesize')->nullable();
            $table->integer('thumbnail_filesize')->nullable();
            $table->text('url')->nullable();
            $table->text('thumbnail_url')->nullable();

            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('deleted_at');
        });
    }
}
