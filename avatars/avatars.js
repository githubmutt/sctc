

function loadAvatar(theList, theDir , AvatarList , limitt){



 var image="" , avatarHTML="", tempHTML=""
 
 for(var i=0; i< AvatarList.length && i<limit ; i++){
    console.log( "i="+ i)
    image = AvatarList[i]
    tempHTML = '<img class="avatar" src="'    
    tempHTML += "avatars/"+ theDir + "/"+ image
    tempHTML += '"'
    tempHTML += ">"
   
    avatarHTML += tempHTML
}

console.log(theList)
document.getElementById(theList).innerHTML = avatarHTML + tempHTML
//document.getElementById("memberList").innerHTML = tableHTML + eventHTML

}

var Monster=Array()
Monster.push("png-transparent-avatar-horror-monster-illustration-horror-avatar-template-head-fictional-character-thumbnail.png")
Monster.push("png-transparent-avatar-hulk-avatar-head-user-avatars-illustration-thumbnail.png")
Monster.push("png-transparent-cartoon-halloween-illustration-horror-avatar-photography-poster-head-thumbnail.png")
Monster.push("png-transparent-classdojo-avatar-youtube-others-english-orange-smiley-thumbnail.png")
Monster.push("png-transparent-classdojo-monster-avatar-dojo-monster-s-leaf-computer-smiley-thumbnail.png")
Monster.push("png-transparent-classdojo-student-teacher-classroom-monster-purple-mammal-cat-like-mammal-thumbnail-1.png")
Monster.push("png-transparent-classdojo-student-teacher-classroom-monster-purple-mammal-cat-like-mammal-thumbnail.png")
Monster.push("png-transparent-computer-icons-tagpro-avatar-icon-design-avatar-face-heroes-snout-thumbnail.png")
Monster.push("png-transparent-emoticon-smiley-computer-icons-monster-monster-monsters-sad-smiley-smiley-face-icon-purple-face-violet-thumbnail.png")
Monster.push("png-transparent-emoticon-smiley-yellow-brown-monsters-57-face-smiley-online-chat-thumbnail.png")
Monster.push("png-transparent-emoticon-smiley-yellow-facial-expression-brown-monsters-14-smiley-emoticon-internet-forum-thumbnail.png")
Monster.push("png-transparent-emoticon-yellow-beak-smile-brown-monsters-46-smiley-online-chat-emoticon-thumbnail.png")
Monster.push("png-transparent-football-player-cartoon-girl-women-play-game-holidays-women-accessories-thumbnail.png")
Monster.push("png-transparent-granblue-fantasy-gray-wolf-monster-illustration-wolf-monster-game-animals-carnivoran-thumbnail.png")
Monster.push("png-transparent-halloween-avatars-ghost-monsters-scary-spooky-fear-mummy-pumpkin-jack-o-lantern-thumbnail.png")
Monster.push("png-transparent-halloween-monster-material-happy-halloween-face-festive-elements-thumbnail.png")
Monster.push("png-transparent-ilustradores-argentinos-iglesia-del-dios-viviente-visual-arts-age-of-enlightenment-illustration-monster-avatar-heroes-poster-illustrator-thumbnail.png")
Monster.push("png-transparent-michael-myers-computer-icons-emoticon-avatar-ghosts-and-monsters-thumbnail.png")
Monster.push("png-transparent-mike-wazowski-james-p-sullivan-roz-monsters-inc-mike-wazowsk-vertebrate-fictional-character-pixar-thumbnail.png")
Monster.push("png-transparent-monster-computer-icons-ghost-godzilla-monster-silhouette-haunted-house-avatar-thumbnail.png")
Monster.push("png-transparent-monster-desktop-monster-inc-leaf-heart-grass-thumbnail.png")
Monster.push("png-transparent-monster-smiley-avatar-alien-relaxing-purple-violet-smiley-thumbnail.png")
Monster.push("png-transparent-pinhead-computer-icons-hellraiser-avatar-youtube-toothpaste-miscellaneous-heroes-toothpaste-thumbnail.png")
Monster.push("png-transparent-sina-weibo-cuteness-avatar-moe-cartoon-holding-a-loving-monster-love-painted-hand-thumbnail.png")
Monster.push("png-transparent-smile-yellow-beak-icon-brown-monsters-49-face-smiley-online-chat-thumbnail.png")

var Anime = Array()
Anime.push("png-transparent-animal-prints-elephant-carrying-white-rabbit-illustration-watercolor-painting-white-mammal-thumbnail.png")
Anime.push("png-transparent-animated-cartoon-animation-woman-3d-villain-black-hair-cartoon-girl-thumbnail.png")
Anime.push("png-transparent-animated-girl-illustration-hijab-cartoon-islam-drawing-anime-muslim-face-head-fictional-character-thumbnail.png")
Anime.push("png-transparent-animated-masha-and-the-bear-animation-bear-thumbnail.png")
Anime.push("png-transparent-animation-animated-cartoon-youtube-character-animation-child-boy-illustrator-thumbnail.png")
Anime.push("png-transparent-animation-animation-3d-computer-graphics-black-hair-cartoon-thumbnail.png")
Anime.push("png-transparent-anime-animation-walking-walk-cycle-anime-television-black-hair-photography-thumbnail.png")
Anime.push("png-transparent-anime-art-sword-katana-anime-cg-artwork-black-hair-photography-thumbnail.png")
Anime.push("png-transparent-anime-catgirl-art-kavaii-anime-amour-cg-artwork-chibi-fictional-character-thumbnail.png")
Anime.push("png-transparent-anime-character-chewing-bubble-gum-anime-anime-boy-black-hair-human-cartoons-thumbnail.png")
Anime.push("png-transparent-anime-character-with-brown-haired-holding-rifle-anime-female-firearm-girls-with-guns-manga-anime-assault-rifle-airsoft-cartoon-thumbnail.png")
Anime.push("png-transparent-anime-chibi-drawing-art-manga-anime-girl-child-face-cg-artwork-thumbnail.png")
Anime.push("png-transparent-anime-desktop-manga-television-show-anime-black-hair-manga-human-thumbnail.png")
Anime.push("png-transparent-anime-drawing-art-aesthetics-manga-anime-black-hair-manga-aesthetics-thumbnail.png")
Anime.push("png-transparent-anime-drawing-art-artwork-cg-artwork-black-hair-manga-thumbnail.png")
Anime.push("png-transparent-anime-drawing-boy-anime-boy-black-hair-manga-chibi-thumbnail.png")
Anime.push("png-transparent-anime-drawing-manga-boy-anime-umbrella-manga-monochrome-thumbnail.png")
Anime.push("png-transparent-anime-fan-art-manga-anime-cg-artwork-black-hair-manga-thumbnail.png")
Anime.push("png-transparent-anime-female-manga-drawing-anime-girl-cg-artwork-black-hair-cartoon-thumbnail.png")
Anime.push("png-transparent-anime-girl-chibi-anime-girl-blue-haired-girl-illustration-black-hair-cartoons-cartoon-thumbnail.png")
Anime.push("png-transparent-anime-kavaii-drawing-manga-chibi-anime-child-face-cg-artwork-thumbnail.png")
Anime.push("png-transparent-anime-kavaii-manga-magical-girl-anime-thumbnail.png")
Anime.push("png-transparent-anime-kawaii-female-chibi-anime-cg-artwork-black-hair-hand-thumbnail.png")
Anime.push("png-transparent-anime-manga-drawing-clannad-anime-girl-black-hair-color-fictional-character-thumbnail.png")
Anime.push("png-transparent-anime-manga-hair-female-anime-cg-artwork-black-hair-manga-thumbnail.png")
Anime.push("png-transparent-anime-manga-konosuba-9gag-anime-thumbnail.png")
Anime.push("png-transparent-anime-mangaka-anime-girl-cg-artwork-black-hair-manga-thumbnail.png")
Anime.push("png-transparent-anime-soldier-fan-art-military-manga-anime-manga-cartoon-call-of-duty-thumbnail.png")
Anime.push("png-transparent-black-clover-anime-music-video-manga-animation-black-clover-anime-fictional-character-one-piece-magic-thumbnail.png")
Anime.push("png-transparent-blend-s-anime-graphy-manga-anime-face-head-cartoon-thumbnail.png")
Anime.push("png-transparent-cat-anime-drawing-animated-film-cat-mammal-animals-cat-like-mammal-thumbnail.png")
Anime.push("png-transparent-cat-noragami-yato-no-kami-anime-anime-black-hair-manga-fictional-character-thumbnail.png")
Anime.push("png-transparent-catgirl-anime-anime-mammal-cat-like-mammal-carnivoran-thumbnail.png")
Anime.push("png-transparent-cutout-animation-person-figure-miscellaneous-tshirt-blue-thumbnail.png")
Anime.push("png-transparent-date-a-live-anime-fan-art-manga-anime-thumbnail.png")
Anime.push("png-transparent-eren-yeager-mikasa-ackerman-attack-on-titan-levi-anime-anime-thumbnail.png")
Anime.push("png-transparent-eromanga-sensei-desktop-anime-anime-thumbnail.png")
Anime.push("png-transparent-fan-art-anime-character-anime-television-manga-tartan-thumbnail.png")
Anime.push("png-transparent-fan-art-anime-nekopara-anime-cg-artwork-black-hair-swimwear-thumbnail.png")
Anime.push("png-transparent-female-animated-character-anime-girl-desktop-cute-girl-purple-cg-artwork-black-hair-thumbnail.png")
Anime.push("png-transparent-female-animated-character-the-idolmaster-cinderella-girls-anime-mangaka-anime-black-hair-manga-cartoon-thumbnail.png")
Anime.push("png-transparent-female-anime-character-anime-drawing-chibi-kavaii-manga-cute-little-girl-white-child-face-thumbnail.png")
Anime.push("png-transparent-female-anime-character-holding-white-and-green-plastic-cup-the-idolmaster-cinderella-girls-rin-shibuya-anime-kavaii-anime-girl-black-hair-manga-cartoon-thumbnail.png")
Anime.push("png-transparent-female-anime-character-illustration-nazism-anime-nazi-germany-internet-meme-manga-anime-boy-black-hair-meme-cartoon-thumbnail.png")
Anime.push("png-transparent-female-black-haired-anime-character-taki-tachibana-mitsuha-miyamizu-anime-futaba-miyamizu-film-anime-black-hair-manga-fictional-character-thumbnail.png")
Anime.push("png-transparent-ghibli-museum-studio-ghibli-animation-animation-food-studio-head-thumbnail.png")
Anime.push("png-transparent-granblue-fantasy-eren-yeager-mikasa-ackerman-attack-on-titan-anime-anime-black-hair-fictional-character-cartoon-thumbnail.png")
Anime.push("png-transparent-gray-and-black-piglet-hei-hei-the-rooster-animation-film-moana-island-life-animation-cartoon-desktop-wallpaper-snout-thumbnail.png")
Anime.push("png-transparent-hatsune-miku-project-diva-f-vocaloid-anime-drawing-anime-girl-ribbon-cg-artwork-fictional-characters-thumbnail.png")
Anime.push("png-transparent-kavaii-anime-drawing-art-anime-mammal-face-cg-artwork-thumbnail.png")
Anime.push("png-transparent-killua-zoldyck-zoldyck-family-hunter-×-hunter-anime-manga-anime-purple-face-cg-artwork-thumbnail.png")
Anime.push("png-transparent-konosuba-anime-desktop-film-anime-television-manga-sticker-thumbnail.png")
Anime.push("png-transparent-kuroko-s-basketball-anime-manga-shintaro-midorima-character-anime-thumbnail.png")
Anime.push("png-transparent-levi-anime-attack-on-titan-chibi-eren-yeager-anime-black-hair-manga-chibi-thumbnail.png")
Anime.push("png-transparent-levi-eren-yeager-attack-on-titan-armin-arlert-anime-anime-black-hair-manga-cartoon-thumbnail.png")
Anime.push("png-transparent-male-anime-character-illustration-anime-osomatsu-kun-manga-male-yaoi-anime-boy-purple-black-hair-violet-thumbnail.png")
Anime.push("png-transparent-man-haired-anime-character-your-name-taki-tachibana-mitsuha-miyamizu-futaba-miyamizu-anime-name-black-hair-human-cartoon-thumbnail.png")
Anime.push("png-transparent-man-wearing-black-suit-illustration-anime-music-video-desktop-coub-anime-boy-black-hair-manga-necktie-thumbnail.png")
Anime.push("png-transparent-man-with-white-haired-anime-character-illustation-tokyo-ghoul-re-ken-kaneki-anime-ghoul-photography-manga-monochrome-thumbnail.png")
Anime.push("png-transparent-nao-tomori-anime-manga-character-anime-thumbnail.png")
Anime.push("png-transparent-nico-yazawa-anime-manga-japanese-idol-anime-child-face-black-hair-thumbnail.png")
Anime.push("png-transparent-noragami-yato-no-kami-anime-manga-anime-black-hair-manga-chibi-thumbnail.png")
Anime.push("png-transparent-overwatch-d-va-anime-widowmaker-anime-purple-cg-artwork-manga-thumbnail.png")
Anime.push("png-transparent-psychic-detective-yakumo-manga-anime-anime-boy-black-hair-necktie-fictional-character-thumbnail.png")
Anime.push("png-transparent-sasuke-uchiha-itachi-uchiha-chidori-anime-anime-photography-computer-wallpaper-sasuke-uchiha-thumbnail.png")
Anime.push("png-transparent-sena-kashiwazaki-anime-manga-senketsu-anime-thumbnail.png")
Anime.push("png-transparent-shoya-ishida-shouko-nishimiya-anime-kyoto-animation-others-hand-human-fashion-illustration-thumbnail.png")
Anime.push("png-transparent-shoyo-hinata-haikyu-hinata-hyuga-anime-anime-manga-cartoon-fictional-character-thumbnail.png")
Anime.push("png-transparent-sleep-animation-night-animation-child-furniture-rectangle-thumbnail.png")
Anime.push("png-transparent-stick-figure-animation-investigation-pencil-presentation-computer-wallpaper-thumbnail.png")
Anime.push("png-transparent-the-idolmaster-cinderella-girls-anime-mangaka-rin-anime-brown-black-hair-cartoon-thumbnail.png")
Anime.push("png-transparent-the-idolmaster-cinderella-girls-desktop-shibuya-anime-anime-girl-cg-artwork-black-hair-cartoon-thumbnail.png")
Anime.push("png-transparent-the-seven-deadly-sins-meliodas-anime-anime-purple-violet-cartoon-thumbnail.png")
Anime.push("png-transparent-tifa-lockhart-anime-female-final-fantasy-vii-character-anime-cg-artwork-black-hair-fictional-character-thumbnail.png")
Anime.push("png-transparent-turtle-animation-turtle-animals-photography-cartoon-thumbnail.png")
Anime.push("png-transparent-walking-male-illustration-animation-walking-character-walk-cycle-animation-child-hand-sport-thumbnail.png")
Anime.push("png-transparent-yui-hirasawa-anime-desktop-k-on-anime-black-hair-hand-fictional-character-thumbnail.png")
Anime.push("png-transparent-yui-hirasawa-k-on-mio-akiyama-anime-kavaii-anime-girl-child-face-black-hair-thumbnail.png")


var limit=23
// id="monsterList"  directory = "moster"  array=Monster
loadAvatar("MonsterList","monster", Monster ,limit)

limit=31
loadAvatar("AnimeList", "anime", Anime,limit)


