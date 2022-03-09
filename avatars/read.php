<?php



$avatars = scandir("." );


foreach( $avatars  as $key => $value){
    print("Anime.push(".'"'.$value.'"'.")"."\n" );

}

?>