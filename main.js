var names=[
    "Ayaan Puri",
    "Anjan Puri (Father)",
    "Payal Puri (Mother)",
    "Manju Saraf (Nani)",
    "Murlidhar Saraf (Nana)",
    "Yogesh Puri (Baba)",
    "Anurag Saraf (Mama)",
    "Radhika Saraf (Mami)",
    "Sovna Puri (Bua)",
    "Pooja Jain (Mausi)"
    ];
    var img_src=[
        "IMG_1802.JPG",
        "IMG_2910.JPG",
        "IMG_0696.JPG",
        "fullsizeoutput_6c17.JPG",
        "IMG_0050.JPG",
        "IMG_0028.JPG",
        "DSCO2766.jpg",
        "IMG_3130.JPG",
        "IMG_0027.jpg",
        "IMG_0104.JPG"
    ];
    var i=0;
function nextslide(){
document.getElementById("reasontext").innerHTML=names[i];
document.getElementById("audio").play();
document.getElementById("album").src=img_src[i];
i++;
}
    