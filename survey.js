var quizContainer= document.getElementById('quiz');
var resultsContainer=document.getElementById('results');
var submitButton=document.getElementById('submit');

function showResults(){
  var Male=document.getElementById("chkbox1").checked;
  var Female=document.getElementById("chkbox2").checked;
  var nb=document.getElementById("chkbox3").checked;
  var gnc=document.getElementById("chkbox4").checked;
  var Black=document.getElementById("chkbox11").checked;
  var White=document.getElementById("chkbox22").checked;
  var Asian=document.getElementById("chkbox33").checked;
  var Hispanic=document.getElementById("chkbox44").checked;
  console.log("Running function showResults");
  if(Male && White){document.getElementById('results').innerHTML = "White males should not wear dreadlocks,sombreros,panchos, durags, cornrows, grillz, Native American headresses, hijabs, dashikis, black face, yellow face,hoop earrings, afros, and bandanas!  '<img src=\"http://static.spin.com/files/140620-riff-raff.jpg\"  height=\'300\' width=\"500\"> <br> THIS IS NOT OKAY!";
}
  if(Male&& White&& Asian){document.getElementById("results").innerHTML="Mixed race males(White and Asian) should not wear dreadlocks,sombreros,panchos, durags, cornrows, grillz, Native American headresses, hijabs, dashikis, black face, hoop earrings,afros,and bandanas! <br><img src =\"http://68.media.tumblr.com/fa8fcdc0a6e348128db5f1a8637baf32/tumblr_inline_nsl8ahLmav1qbq12n_500.gif\" height=\'400\' width=\"500\"> <br> THIS IS NOT OKAY!";
}
if(Male&&Asian&& !White){document.getElementById("results").innerHTML="Asian males should not wear dreadlocks,sombreros,panchos, durags, cornrows, grillz, Native American headresses, hijabs, dashikis, black face, hoop earrings, afros, and bandanas!<img src =\"http://68.media.tumblr.com/fa8fcdc0a6e348128db5f1a8637baf32/tumblr_inline_nsl8ahLmav1qbq12n_500.gif\"height=\'400\' width=\"500\"> <br> ....yeah no";
}
if(Male&&Black&& !White){document.getElementById("results").innerHTML="  Black males should not wear sombreros,panchos, Native American headresses,hijabs,turbans,yellow face,white face, and traditional asian suits and or dresses.<br> <img src=\"https://media.giphy.com/media/l0MYMesNHo6USDsRi/giphy.gif\" height=\> <br>THIS IS NOT OKAY!";
}
if(Male&&Black&&White){document.getElementById("results").innerHTML="Mixed race males(Black and White)should not wear sombreros,panchos,Native American headresses,turbans,yellow face,white face,and traditional asian suits and or dresses.<br> '<img src=\"https://i.makeagif.com/media/1-27-2016/K-u9pt.gif\"> <br> THIS IS NOT OKAY!";
}
if(Male&&Hispanic){document.getElementById("results").innerHTML=" Latino men should not wear Native American headresses,hijabs,turbans,afros(only men with afro Latino hertiage can do this),black face, white face,dreadlocks, yellow face, traditional asian suits and or dresses. <br> <img src=\"http://68.media.tumblr.com/523177d1043e104160cf8cf6e63ed91a/tumblr_inline_ncns177xSr1qb3x2b.jpg\"> <br>  THIS IS NOT OKAY!";
}
if(Male&&Black&&Asian&&!White){document.getElementById("results").innerHTML="Mixed race males(Black and Asian)should not wear sombreros,panchos,Native American headresses,turbans, and white face. <br> <img src=\"http://uptownmagazine.com/files/2014/10/uptown-snoop-dogg-whiteface.jpe\">,<br> THIS IS NOT OKAY! ";
}
if(Male&&Hispanic&&White){document.getElementById("results").innerHTML="Latino men should not wear Native American headresses,turbans,afros(only men with afro Latino hertiage can do this), dreadlocks,black face, white face, yellow face, traditional asian suits and or dresses.<br> '<img src=\"http://68.media.tumblr.com/523177d1043e104160cf8cf6e63ed91a/tumblr_inline_ncns177xSr1qb3x2b.jpg\"> <br>  NOOOOOOOO!";
}
if(Male&&Hispanic&&Black){document.getElementById("results").innerHTML="Mixed race males(Hispanic and Black) should not wear turbans,yellow face, traditional asian suits and or dresses, white face, Native American headresses.<br> <img src=\"https://media.tenor.com/images/8764b150cc7ea7347e12b4a1e23c2aec/tenor.gif\"><br> THIS IS NOT OKAY!!";
}
if(Female&&White){document.getElementById("results").innerHTML="White females should not wear bindis, Native American headresses, cornrows,hoop earrings, sombreros, afros, hijabs, traditional asian dresses,black face, yellow face,bantu knots, durags,grillz,bandanas,dreadlocks,dashikis,gold chains head pieces,name plate necklaces,and kimonos. <br> <img src=\"https://media.giphy.com/media/guGclq1mN9eak/giphy.gif\"> <br> THIS ISN'T HOW WE DO, KATY.";
}
if(Female&&White&&Asian&&!Hispanic&&!Black){document.getElementById("results").innerHTML="Mixed females(White and Asian) should not wear bindis(unless mixed with Indian), Native American headresses, cornrows,hoop earrings, sombreros, afros, hijabs(unless mixed with middle eastern ethncity and is a practcing muslim), black face,bantu knots, durags,grillz,bandanas,dreadlocks,dashikis, head pieces,and name plate necklaces.<br> <img src=\"http://3.bp.blogspot.com/-xQ3pJyxEx6c/U31-ttjjVXI/AAAAAAAAAOQ/VF03vsVlQvU/s1600/Taeyang.jpg\"> <br> ...NO GIRL";
}
if(Female&&White&&Black){document.getElementById("results").innerHTML="Mixed females(White and Black) should not wear bindis, traditional asian dresses, kimonos, Native American headresses, hijabs , black face , bandanas, head pieces,white face, and yellow face. <br> <img src=\"http://www.buro247.me/thumb/700x390_5/images/beyoncecoldplayrubric.gif\"> <br> I love Beyonce, but this isn't okay!";
}
if(Female&&Black&& !White) {document.getElementById("results").innerHTML="Black females  should not wear bindis, traditional asian dresses, kimonos, Native American headresses, hijabs , black face , bandanas, head pieces,white face, and yellow face. <br> <img src=\"http://www.buro247.me/thumb/700x390_5/images/beyoncecoldplayrubric.gif\"> <br> I love Beyonce, but this isn't okay!";
}
if(Female&&Black&&Hispanic){document.getElementById("results").innerHTML="Mixed females(Hispanic and Black) should not wear bindis, traditional asian dresses, kimonos, Native American headresses, hijabs , head pieces,white face, and yellow face. <br> <img src=\"http://33.media.tumblr.com/tumblr_m8d739CU4z1qk6fqao1_500.gif\"> <br> Nicki is a queen, but this isn't cool!";
}
if(Female&&White&&Hispanic){document.getElementById("results").innerHTML="Mixed race females(White and Hispanic)should not wear bindis, traditional asian dresses, kimonos, Native American headresses, hijabs ,black face,afros(this is okay if one is Afro Latina) head pieces,white face,durags,dreadlocks, white face, bantu knots, twists,and yellow face.<br><img src=\"https://media.giphy.com/media/AEsfWaSKtiuv6/giphy.gif\"><br> NOPE.";
}
if(Female&&Asian&&!Hispanic){document.getElementById("results").innerHTML="Asian females should not wear bindis(unless  Indian), Native American headresses, cornrows,hoop earrings, sombreros, afros, hijabs(unless they're of middle eastern ethncity and is a practcing muslim), black face,bantu knots, durags,grillz,bandanas,black face,dreadlocks,twists,dashikis, head pieces,and name plate necklaces.<br> <img src=\"http://pa1.narvii.com/5842/16a9ee4ac39666e2c5461d447eca4b2fbd73cd3d_hq.gif\"> <br> no honey....";
}
if(Female&&Asian&&Black){document.getElementById("results").innerHTML="Mixed females(Asian and Black) should not wear bindis(unless Indian),Native American headresses,white face, sombreros,and head pieces <br> <img src=\"https://i0.wp.com/blackgirllonghair.com/wp-content/uploads/2015/07/nickitrinindad.gif\"><br><br> NICKI...DARLING...NO...";
}
if(nb&&White){document.getElementById("results").innerHTML="White,nonbinary people should not wear dreadlocks,sombreros,panchos, durags, cornrows, grillz, Native American headresses, hijabs, dashikis, black face, yellow face,hoop earrings, afros, bandanas,bindis, Native American headresses, cornrows,hoop earrings, sombreros, afros, hijabs, traditional asian dresses,black face, yellow face,bantu knots, durags,grillz,bandanas,dreadlocks,dashikis,gold chains, head pieces,name plate necklaces,and kimonos!<br> <img src=\"http://68.media.tumblr.com/c3d9c2b60bd22539764e18cf1bd221ec/tumblr_njuximEdjy1snotjyo1_500.gif\"><br><br> Miley..";
}
if(nb&&Black){document.getElementById("results").innerHTML="Black,nonbinary people should not wear sombreros,panchos, Native American headresses,hijabs,turbans,yellow face,white face,traditional asian suits and or dresses,bindis, kimonos, and head pieces <br> <img src=\"http://cdn.playbuzz.com/cdn/1e94152d-127a-4f40-9e4c-2dd8cabcfeff/30411e34-b2c3-47a8-a6ba-f1be7d39cdf9.gif\"> <br><br> Bob knows what's up.";
}
if(nb&&Asian){document.getElementById("results").innerHTML="Asian, nonbinary people should not wear sombreros,panchos, Native American headresses,turbans,hijabs,white face,black face,dashikis,bandanas,cornrows,grillz,durags,hoop earrings,bantu knots, dreadlocks,gold chains, and name plate necklaces. <br> <img src=\"https://i.pinimg.com/736x/11/fe/d9/11fed9d0be181de6125e211cd660df08--revenge-quotes-race-quotes.jpg\"> <br> Someone might pee on your pillow if you don't take of that wig";
}
if(nb&&Hispanic){document.getElementById("reuslts").innerHTML="Hispanic,nonbinary people should not wear Native American headresses,turbans, hijabs,white face,black face, yellow face, dashikis, durags, bantu knots, kimonos, traditional asian dresses and or suits,bindis,and head pieces <br> <img src=\"https://i.pinimg.com/736x/e2/6e/5f/e26e5fb6aeded0250f6f63afd6aa468b--alexis-mateo-lady-boys.jpg\"> <br> THIS IS NOT ACCEPTABLE!!.";
}
if(nb&&White&&Black){document.getElementById("results").innerHTML="Mixed race non binary people(White and Black) should not wear  sombreros,panchos, Native American headresses, hijabs,  white face, yellow face,bindis, hijabs, traditional asian dresses,and kimonos!<br> <img src=\"https://68.media.tumblr.com/bc3921b12997870ec8d278b8cdedecf7/tumblr_nmtyhm0XXn1r8jjn6o5_400.gif\"> <br> Amandla has the right idea!";
}
if(nb&&White&&Hispanic){document.getElementById("results").innerHTML="Mixed race non binary(White and Hispanic) should not wear hijabs,Native American headresses, white face, black face, yellow face, traditional asian dresses and or suits, kimonos, afros(unless Afro Latinx),head pieces,dashikis, bindis,and bantu knots <br> <img src=\"https://media.tenor.com/images/76705f769bbc4a71fa7c5baed75294f6/tenor.gif\"> <br> *severely judges anyone wearing the following items*";
}
if(Female&&Hispanic){document.getElementById("results").innerHTML="Hispanic females should not wear  bindis, traditional asian dresses, kimonos, Native American headresses, hijabs ,black face,afros(this is okay if one is Afro Latina) head pieces,white face,durags,dreadlocks, white face, bantu knots, twists,and yellow face.<br> <img src=\"http://www.vh1.com/news/wp-content/uploads/blog.vh1.com/2014/08/18-Jennifer-Lopez.png\"> <br> It's a no from me JLo";
}
if(nb&&White&&Asian){document.getElementById("results").innerHTML="Mixed nonbinary people(White and Asian) should not wear bindis(unless mixed with Indian), Native American headresses, cornrows,hoop earrings, sombreros, afros, hijabs(unless mixed with middle eastern ethncity and is a practcing muslim), black face,bantu knots, durags,grillz,dreadlocks,dashikis, head pieces,and name plate necklaces.<br> <img src=\"https://media.giphy.com/media/TID49zeNXfteg/source.gif\"> <br> Jujubee really isn't into cultural appropriation";
}
if(nb&&Black&&Asian){document.getElementById("results").innerHTML="Mixed nonbinary people(Asian and Black) should not wear bindis(unless Indian),Native American headresses,white face, sombreros,and head pieces,panchos,hijabs,turbans, and white face.<br><img src=\"https://media2.giphy.com/media/26BRJcNYE72ZyIkmY/100.gif\"><br> The side eye you'll recieve if you wear these things";
}
if(nb&&Black&&Hispanic){document.getElementById("results").innerHTML="Mixed nonbinary people(Black and Hispanic) should not wear  traditional asian dresses, kimonos, Native American headresses, hijabs , head pieces,white face, and yellow face.<br> <img src=\"https://media.tenor.com/images/8764b150cc7ea7347e12b4a1e23c2aec/tenor.gif\"><br> NOOOOOOOO!";
}
if(gnc&White){document.getElementById("results").innerHTML="White,gender noncomforming people should not wear dreadlocks,sombreros,panchos, durags, cornrows, grillz, Native American headresses, hijabs, dashikis, black face, yellow face,hoop earrings, afros, bandanas,bindis,  traditional asian dresses,black face, yellow face,bantu knots, grillz,bandanas,dreadlocks, dashikis,gold chains, head pieces,name plate necklaces,and kimonos!<br> <img src=\"http://68.media.tumblr.com/c3d9c2b60bd22539764e18cf1bd221ec/tumblr_njuximEdjy1snotjyo1_500.gif\"> <br> noooooopppeee";
}
if(gnc&Black){document.getElementById("results").innerHTML="Black,gender noncomforming people should not wear sombreros,panchos, Native American headresses,hijabs,turbans,yellow face,white face,traditional asian suits and or dresses,bindis, kimonos, and head pieces <br> <img src= \"http://cdn.playbuzz.com/cdn/1e94152d-127a-4f40-9e4c-2dd8cabcfeff/30411e34-b2c3-47a8-a6ba-f1be7d39cdf9.gif\"><br> NOOOOOOO";
}
if(gnc&Asian){document.getElementById("results").innerHTML="Asian,gender noncomforming people should not wear sombreros,panchos, Native American headresses,hijabs,turbans,hoop earrings,cornrows,afros,durags,gold chains,black face, dashikis,white face,traditional asian suits and or dresses,bindis, kimonos, dreadlocks,bantu knots, grillz, bandanas, name plate necklaces,and head pieces<br> <img src= \"https://media.giphy.com/media/TID49zeNXfteg/source.gif\"> <br> Jujubee really isn't into cultural appropriation";
}
if(gnc&Hispanic){document.getElementById("results").innerHTML="Hispanic,gender noncomforming people should not wear  bindis, traditional asian dresses, kimonos, Native American headresses, hijabs ,black face,afros(this is okay if one is Afro Latina) head pieces,white face,durags,dreadlocks, white face, bantu knots, twists, turbans,traditional asian dresses and or suits, and yellow face <br> <img src=\"https://media.tenor.com/images/76705f769bbc4a71fa7c5baed75294f6/tenor.gif\"> <br> *severely judges you  wearing the following items*";
}

}
console.log("Do stuff here");




//on submit, show results
submitButton.addEventListener('click',showResults);
