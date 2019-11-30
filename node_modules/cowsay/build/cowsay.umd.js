(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('.cows/ackbar.cow'), require('.cows/aperture-blank.cow'), require('.cows/aperture.cow'), require('.cows/armadillo.cow'), require('.cows/atat.cow'), require('.cows/atom.cow'), require('.cows/awesome-face.cow'), require('.cows/banana.cow'), require('.cows/bearface.cow'), require('.cows/bees.cow'), require('.cows/bill-the-cat.cow'), require('.cows/biohazard.cow'), require('.cows/bishop.cow'), require('.cows/black-mesa.cow'), require('.cows/box.cow'), require('.cows/broken-heart.cow'), require('.cows/C3PO.cow'), require('.cows/cake.cow'), require('.cows/cake-with-candles.cow'), require('.cows/cat2.cow'), require('.cows/cat.cow'), require('.cows/catfence.cow'), require('.cows/charizardvice.cow'), require('.cows/charlie.cow'), require('.cows/chessmen.cow'), require('.cows/chito.cow'), require('.cows/claw-arm.cow'), require('.cows/clippy.cow'), require('.cows/companion-cube.cow'), require('.cows/cowfee.cow'), require('.cows/cthulhu-mini.cow'), require('.cows/cube.cow'), require('.cows/dalek.cow'), require('.cows/dalek-shooting.cow'), require('.cows/docker-whale.cow'), require('.cows/dolphin.cow'), require('.cows/ebi_furai.cow'), require('.cows/elephant2.cow'), require('.cows/elephant.cow'), require('.cows/explosion.cow'), require('.cows/fat-banana.cow'), require('.cows/fat-cow.cow'), require('.cows/fence.cow'), require('.cows/fire.cow'), require('.cows/fox.cow'), require('.cows/ghost.cow'), require('.cows/glados.cow'), require('.cows/goat2.cow'), require('.cows/golden-eagle.cow'), require('.cows/hand.cow'), require('.cows/happy-whale.cow'), require('.cows/hippie.cow'), require('.cows/hiya.cow'), require('.cows/hiyoko.cow'), require('.cows/homer.cow'), require('.cows/hypno.cow'), require('.cows/ibm.cow'), require('.cows/iwashi.cow'), require('.cows/jellyfish.cow'), require('.cows/karl_marx.cow'), require('.cows/kilroy.cow'), require('.cows/king.cow'), require('.cows/kitten.cow'), require('.cows/knight.cow'), require('.cows/lamb2.cow'), require('.cows/lamb.cow'), require('.cows/lightbulb.cow'), require('.cows/lobster.cow'), require('.cows/lollerskates.cow'), require('.cows/mailchimp.cow'), require('.cows/maze-runner.cow'), require('.cows/minotaur.cow'), require('.cows/mona-lisa.cow'), require('.cows/mooghidjirah.cow'), require('.cows/moojira.cow'), require('.cows/mule.cow'), require('.cows/nyan.cow'), require('.cows/octopus.cow'), require('.cows/okazu.cow'), require('.cows/owl.cow'), require('.cows/pawn.cow'), require('.cows/periodic-table.cow'), require('.cows/personality-sphere.cow'), require('.cows/pinball-machine.cow'), require('.cows/psychiatrichelp2.cow'), require('.cows/psychiatrichelp.cow'), require('.cows/pterodactyl.cow'), require('.cows/queen.cow'), require('.cows/R2-D2.cow'), require('.cows/radio.cow'), require('.cows/renge.cow'), require('.cows/robot.cow'), require('.cows/robotfindskitten.cow'), require('.cows/roflcopter.cow'), require('.cows/rook.cow'), require('.cows/sachiko.cow'), require('.cows/seahorse-big.cow'), require('.cows/seahorse.cow'), require('.cows/shikato.cow'), require('.cows/shrug.cow'), require('.cows/smiling-octopus.cow'), require('.cows/snoopy.cow'), require('.cows/snoopyhouse.cow'), require('.cows/snoopysleep.cow'), require('.cows/spidercow.cow'), require('.cows/squid.cow'), require('.cows/sudowoodo.cow'), require('.cows/tableflip.cow'), require('.cows/taxi.cow'), require('.cows/template.cow'), require('.cows/threader.cow'), require('.cows/threecubes.cow'), require('.cows/toaster.cow'), require('.cows/tortoise.cow'), require('.cows/tux-big.cow'), require('.cows/tweety-bird.cow'), require('.cows/USA.cow'), require('.cows/vader.cow'), require('.cows/weeping-angel.cow'), require('.cows/wizard.cow'), require('.cows/wood.cow'), require('.cows/world.cow'), require('.cows/yasuna_01.cow'), require('.cows/yasuna_02.cow'), require('.cows/yasuna_03a.cow'), require('.cows/yasuna_03.cow'), require('.cows/yasuna_04.cow'), require('.cows/yasuna_05.cow'), require('.cows/yasuna_06.cow'), require('.cows/yasuna_07.cow'), require('.cows/yasuna_08.cow'), require('.cows/yasuna_09.cow'), require('.cows/yasuna_10.cow'), require('.cows/yasuna_11.cow'), require('.cows/yasuna_12.cow'), require('.cows/yasuna_13.cow'), require('.cows/yasuna_14.cow'), require('.cows/yasuna_16.cow'), require('.cows/yasuna_17.cow'), require('.cows/yasuna_18.cow'), require('.cows/yasuna_19.cow'), require('.cows/yasuna_20.cow'), require('.cows/ymd_udon.cow'), require('.cows/zen-noh-milk.cow')) :
	typeof define === 'function' && define.amd ? define(['exports', '.cows/ackbar.cow', '.cows/aperture-blank.cow', '.cows/aperture.cow', '.cows/armadillo.cow', '.cows/atat.cow', '.cows/atom.cow', '.cows/awesome-face.cow', '.cows/banana.cow', '.cows/bearface.cow', '.cows/bees.cow', '.cows/bill-the-cat.cow', '.cows/biohazard.cow', '.cows/bishop.cow', '.cows/black-mesa.cow', '.cows/box.cow', '.cows/broken-heart.cow', '.cows/C3PO.cow', '.cows/cake.cow', '.cows/cake-with-candles.cow', '.cows/cat2.cow', '.cows/cat.cow', '.cows/catfence.cow', '.cows/charizardvice.cow', '.cows/charlie.cow', '.cows/chessmen.cow', '.cows/chito.cow', '.cows/claw-arm.cow', '.cows/clippy.cow', '.cows/companion-cube.cow', '.cows/cowfee.cow', '.cows/cthulhu-mini.cow', '.cows/cube.cow', '.cows/dalek.cow', '.cows/dalek-shooting.cow', '.cows/docker-whale.cow', '.cows/dolphin.cow', '.cows/ebi_furai.cow', '.cows/elephant2.cow', '.cows/elephant.cow', '.cows/explosion.cow', '.cows/fat-banana.cow', '.cows/fat-cow.cow', '.cows/fence.cow', '.cows/fire.cow', '.cows/fox.cow', '.cows/ghost.cow', '.cows/glados.cow', '.cows/goat2.cow', '.cows/golden-eagle.cow', '.cows/hand.cow', '.cows/happy-whale.cow', '.cows/hippie.cow', '.cows/hiya.cow', '.cows/hiyoko.cow', '.cows/homer.cow', '.cows/hypno.cow', '.cows/ibm.cow', '.cows/iwashi.cow', '.cows/jellyfish.cow', '.cows/karl_marx.cow', '.cows/kilroy.cow', '.cows/king.cow', '.cows/kitten.cow', '.cows/knight.cow', '.cows/lamb2.cow', '.cows/lamb.cow', '.cows/lightbulb.cow', '.cows/lobster.cow', '.cows/lollerskates.cow', '.cows/mailchimp.cow', '.cows/maze-runner.cow', '.cows/minotaur.cow', '.cows/mona-lisa.cow', '.cows/mooghidjirah.cow', '.cows/moojira.cow', '.cows/mule.cow', '.cows/nyan.cow', '.cows/octopus.cow', '.cows/okazu.cow', '.cows/owl.cow', '.cows/pawn.cow', '.cows/periodic-table.cow', '.cows/personality-sphere.cow', '.cows/pinball-machine.cow', '.cows/psychiatrichelp2.cow', '.cows/psychiatrichelp.cow', '.cows/pterodactyl.cow', '.cows/queen.cow', '.cows/R2-D2.cow', '.cows/radio.cow', '.cows/renge.cow', '.cows/robot.cow', '.cows/robotfindskitten.cow', '.cows/roflcopter.cow', '.cows/rook.cow', '.cows/sachiko.cow', '.cows/seahorse-big.cow', '.cows/seahorse.cow', '.cows/shikato.cow', '.cows/shrug.cow', '.cows/smiling-octopus.cow', '.cows/snoopy.cow', '.cows/snoopyhouse.cow', '.cows/snoopysleep.cow', '.cows/spidercow.cow', '.cows/squid.cow', '.cows/sudowoodo.cow', '.cows/tableflip.cow', '.cows/taxi.cow', '.cows/template.cow', '.cows/threader.cow', '.cows/threecubes.cow', '.cows/toaster.cow', '.cows/tortoise.cow', '.cows/tux-big.cow', '.cows/tweety-bird.cow', '.cows/USA.cow', '.cows/vader.cow', '.cows/weeping-angel.cow', '.cows/wizard.cow', '.cows/wood.cow', '.cows/world.cow', '.cows/yasuna_01.cow', '.cows/yasuna_02.cow', '.cows/yasuna_03a.cow', '.cows/yasuna_03.cow', '.cows/yasuna_04.cow', '.cows/yasuna_05.cow', '.cows/yasuna_06.cow', '.cows/yasuna_07.cow', '.cows/yasuna_08.cow', '.cows/yasuna_09.cow', '.cows/yasuna_10.cow', '.cows/yasuna_11.cow', '.cows/yasuna_12.cow', '.cows/yasuna_13.cow', '.cows/yasuna_14.cow', '.cows/yasuna_16.cow', '.cows/yasuna_17.cow', '.cows/yasuna_18.cow', '.cows/yasuna_19.cow', '.cows/yasuna_20.cow', '.cows/ymd_udon.cow', '.cows/zen-noh-milk.cow'], factory) :
	(factory((global.cowsay = {}),global.ackbar_cow,global.apertureBlank_cow,global.aperture_cow,global.armadillo_cow,global.atat_cow,global.atom_cow,global.awesomeFace_cow,global.banana_cow,global.bearface_cow,global.bees_cow,global.billTheCat_cow,global.biohazard_cow,global.bishop_cow,global.blackMesa_cow,global.box_cow,global.brokenHeart_cow,global.C3PO_cow,global.cake_cow,global.cakeWithCandles_cow,global.cat2_cow,global.cat_cow,global.catfence_cow,global.charizardvice_cow,global.charlie_cow,global.chessmen_cow,global.chito_cow,global.clawArm_cow,global.clippy_cow,global.companionCube_cow,global.cowfee_cow,global.cthulhuMini_cow,global.cube_cow,global.dalek_cow,global.dalekShooting_cow,global.dockerWhale_cow,global.dolphin_cow,global.ebi_furai_cow,global.elephant2_cow,global.elephant_cow,global.explosion_cow,global.fatBanana_cow,global.fatCow_cow,global.fence_cow,global.fire_cow,global.fox_cow,global.ghost_cow,global.glados_cow,global.goat2_cow,global.goldenEagle_cow,global.hand_cow,global.happyWhale_cow,global.hippie_cow,global.hiya_cow,global.hiyoko_cow,global.homer_cow,global.hypno_cow,global.ibm_cow,global.iwashi_cow,global.jellyfish_cow,global.karl_marx_cow,global.kilroy_cow,global.king_cow,global.kitten_cow,global.knight_cow,global.lamb2_cow,global.lamb_cow,global.lightbulb_cow,global.lobster_cow,global.lollerskates_cow,global.mailchimp_cow,global.mazeRunner_cow,global.minotaur_cow,global.monaLisa_cow,global.mooghidjirah_cow,global.moojira_cow,global.mule_cow,global.nyan_cow,global.octopus_cow,global.okazu_cow,global.owl_cow,global.pawn_cow,global.periodicTable_cow,global.personalitySphere_cow,global.pinballMachine_cow,global.psychiatrichelp2_cow,global.psychiatrichelp_cow,global.pterodactyl_cow,global.queen_cow,global.R2D2_cow,global.radio_cow,global.renge_cow,global.robot_cow,global.robotfindskitten_cow,global.roflcopter_cow,global.rook_cow,global.sachiko_cow,global.seahorseBig_cow,global.seahorse_cow,global.shikato_cow,global.shrug_cow,global.smilingOctopus_cow,global.snoopy_cow,global.snoopyhouse_cow,global.snoopysleep_cow,global.spidercow_cow,global.squid_cow,global.sudowoodo_cow,global.tableflip_cow,global.taxi_cow,global.template_cow,global.threader_cow,global.threecubes_cow,global.toaster_cow,global.tortoise_cow,global.tuxBig_cow,global.tweetyBird_cow,global.USA_cow,global.vader_cow,global.weepingAngel_cow,global.wizard_cow,global.wood_cow,global.world_cow,global.yasuna_01_cow,global.yasuna_02_cow,global.yasuna_03a_cow,global.yasuna_03_cow,global.yasuna_04_cow,global.yasuna_05_cow,global.yasuna_06_cow,global.yasuna_07_cow,global.yasuna_08_cow,global.yasuna_09_cow,global.yasuna_10_cow,global.yasuna_11_cow,global.yasuna_12_cow,global.yasuna_13_cow,global.yasuna_14_cow,global.yasuna_16_cow,global.yasuna_17_cow,global.yasuna_18_cow,global.yasuna_19_cow,global.yasuna_20_cow,global.ymd_udon_cow,global.zenNohMilk_cow));
}(this, (function (exports,ackbar_cow,apertureBlank_cow,aperture_cow,armadillo_cow,atat_cow,atom_cow,awesomeFace_cow,banana_cow,bearface_cow,bees_cow,billTheCat_cow,biohazard_cow,bishop_cow,blackMesa_cow,box_cow,brokenHeart_cow,C3PO_cow,cake_cow,cakeWithCandles_cow,cat2_cow,cat_cow,catfence_cow,charizardvice_cow,charlie_cow,chessmen_cow,chito_cow,clawArm_cow,clippy_cow,companionCube_cow,cowfee_cow,cthulhuMini_cow,cube_cow,dalek_cow,dalekShooting_cow,dockerWhale_cow,dolphin_cow,ebi_furai_cow,elephant2_cow,elephant_cow,explosion_cow,fatBanana_cow,fatCow_cow,fence_cow,fire_cow,fox_cow,ghost_cow,glados_cow,goat2_cow,goldenEagle_cow,hand_cow,happyWhale_cow,hippie_cow,hiya_cow,hiyoko_cow,homer_cow,hypno_cow,ibm_cow,iwashi_cow,jellyfish_cow,karl_marx_cow,kilroy_cow,king_cow,kitten_cow,knight_cow,lamb2_cow,lamb_cow,lightbulb_cow,lobster_cow,lollerskates_cow,mailchimp_cow,mazeRunner_cow,minotaur_cow,monaLisa_cow,mooghidjirah_cow,moojira_cow,mule_cow,nyan_cow,octopus_cow,okazu_cow,owl_cow,pawn_cow,periodicTable_cow,personalitySphere_cow,pinballMachine_cow,psychiatrichelp2_cow,psychiatrichelp_cow,pterodactyl_cow,queen_cow,R2D2_cow,radio_cow,renge_cow,robot_cow,robotfindskitten_cow,roflcopter_cow,rook_cow,sachiko_cow,seahorseBig_cow,seahorse_cow,shikato_cow,shrug_cow,smilingOctopus_cow,snoopy_cow,snoopyhouse_cow,snoopysleep_cow,spidercow_cow,squid_cow,sudowoodo_cow,tableflip_cow,taxi_cow,template_cow,threader_cow,threecubes_cow,toaster_cow,tortoise_cow,tuxBig_cow,tweetyBird_cow,USA_cow,vader_cow,weepingAngel_cow,wizard_cow,wood_cow,world_cow,yasuna_01_cow,yasuna_02_cow,yasuna_03a_cow,yasuna_03_cow,yasuna_04_cow,yasuna_05_cow,yasuna_06_cow,yasuna_07_cow,yasuna_08_cow,yasuna_09_cow,yasuna_10_cow,yasuna_11_cow,yasuna_12_cow,yasuna_13_cow,yasuna_14_cow,yasuna_16_cow,yasuna_17_cow,yasuna_18_cow,yasuna_19_cow,yasuna_20_cow,ymd_udon_cow,zenNohMilk_cow) { 'use strict';

ackbar_cow = ackbar_cow && ackbar_cow.hasOwnProperty('default') ? ackbar_cow['default'] : ackbar_cow;
apertureBlank_cow = apertureBlank_cow && apertureBlank_cow.hasOwnProperty('default') ? apertureBlank_cow['default'] : apertureBlank_cow;
aperture_cow = aperture_cow && aperture_cow.hasOwnProperty('default') ? aperture_cow['default'] : aperture_cow;
armadillo_cow = armadillo_cow && armadillo_cow.hasOwnProperty('default') ? armadillo_cow['default'] : armadillo_cow;
atat_cow = atat_cow && atat_cow.hasOwnProperty('default') ? atat_cow['default'] : atat_cow;
atom_cow = atom_cow && atom_cow.hasOwnProperty('default') ? atom_cow['default'] : atom_cow;
awesomeFace_cow = awesomeFace_cow && awesomeFace_cow.hasOwnProperty('default') ? awesomeFace_cow['default'] : awesomeFace_cow;
banana_cow = banana_cow && banana_cow.hasOwnProperty('default') ? banana_cow['default'] : banana_cow;
bearface_cow = bearface_cow && bearface_cow.hasOwnProperty('default') ? bearface_cow['default'] : bearface_cow;
bees_cow = bees_cow && bees_cow.hasOwnProperty('default') ? bees_cow['default'] : bees_cow;
billTheCat_cow = billTheCat_cow && billTheCat_cow.hasOwnProperty('default') ? billTheCat_cow['default'] : billTheCat_cow;
biohazard_cow = biohazard_cow && biohazard_cow.hasOwnProperty('default') ? biohazard_cow['default'] : biohazard_cow;
bishop_cow = bishop_cow && bishop_cow.hasOwnProperty('default') ? bishop_cow['default'] : bishop_cow;
blackMesa_cow = blackMesa_cow && blackMesa_cow.hasOwnProperty('default') ? blackMesa_cow['default'] : blackMesa_cow;
box_cow = box_cow && box_cow.hasOwnProperty('default') ? box_cow['default'] : box_cow;
brokenHeart_cow = brokenHeart_cow && brokenHeart_cow.hasOwnProperty('default') ? brokenHeart_cow['default'] : brokenHeart_cow;
C3PO_cow = C3PO_cow && C3PO_cow.hasOwnProperty('default') ? C3PO_cow['default'] : C3PO_cow;
cake_cow = cake_cow && cake_cow.hasOwnProperty('default') ? cake_cow['default'] : cake_cow;
cakeWithCandles_cow = cakeWithCandles_cow && cakeWithCandles_cow.hasOwnProperty('default') ? cakeWithCandles_cow['default'] : cakeWithCandles_cow;
cat2_cow = cat2_cow && cat2_cow.hasOwnProperty('default') ? cat2_cow['default'] : cat2_cow;
cat_cow = cat_cow && cat_cow.hasOwnProperty('default') ? cat_cow['default'] : cat_cow;
catfence_cow = catfence_cow && catfence_cow.hasOwnProperty('default') ? catfence_cow['default'] : catfence_cow;
charizardvice_cow = charizardvice_cow && charizardvice_cow.hasOwnProperty('default') ? charizardvice_cow['default'] : charizardvice_cow;
charlie_cow = charlie_cow && charlie_cow.hasOwnProperty('default') ? charlie_cow['default'] : charlie_cow;
chessmen_cow = chessmen_cow && chessmen_cow.hasOwnProperty('default') ? chessmen_cow['default'] : chessmen_cow;
chito_cow = chito_cow && chito_cow.hasOwnProperty('default') ? chito_cow['default'] : chito_cow;
clawArm_cow = clawArm_cow && clawArm_cow.hasOwnProperty('default') ? clawArm_cow['default'] : clawArm_cow;
clippy_cow = clippy_cow && clippy_cow.hasOwnProperty('default') ? clippy_cow['default'] : clippy_cow;
companionCube_cow = companionCube_cow && companionCube_cow.hasOwnProperty('default') ? companionCube_cow['default'] : companionCube_cow;
cowfee_cow = cowfee_cow && cowfee_cow.hasOwnProperty('default') ? cowfee_cow['default'] : cowfee_cow;
cthulhuMini_cow = cthulhuMini_cow && cthulhuMini_cow.hasOwnProperty('default') ? cthulhuMini_cow['default'] : cthulhuMini_cow;
cube_cow = cube_cow && cube_cow.hasOwnProperty('default') ? cube_cow['default'] : cube_cow;
dalek_cow = dalek_cow && dalek_cow.hasOwnProperty('default') ? dalek_cow['default'] : dalek_cow;
dalekShooting_cow = dalekShooting_cow && dalekShooting_cow.hasOwnProperty('default') ? dalekShooting_cow['default'] : dalekShooting_cow;
dockerWhale_cow = dockerWhale_cow && dockerWhale_cow.hasOwnProperty('default') ? dockerWhale_cow['default'] : dockerWhale_cow;
dolphin_cow = dolphin_cow && dolphin_cow.hasOwnProperty('default') ? dolphin_cow['default'] : dolphin_cow;
ebi_furai_cow = ebi_furai_cow && ebi_furai_cow.hasOwnProperty('default') ? ebi_furai_cow['default'] : ebi_furai_cow;
elephant2_cow = elephant2_cow && elephant2_cow.hasOwnProperty('default') ? elephant2_cow['default'] : elephant2_cow;
elephant_cow = elephant_cow && elephant_cow.hasOwnProperty('default') ? elephant_cow['default'] : elephant_cow;
explosion_cow = explosion_cow && explosion_cow.hasOwnProperty('default') ? explosion_cow['default'] : explosion_cow;
fatBanana_cow = fatBanana_cow && fatBanana_cow.hasOwnProperty('default') ? fatBanana_cow['default'] : fatBanana_cow;
fatCow_cow = fatCow_cow && fatCow_cow.hasOwnProperty('default') ? fatCow_cow['default'] : fatCow_cow;
fence_cow = fence_cow && fence_cow.hasOwnProperty('default') ? fence_cow['default'] : fence_cow;
fire_cow = fire_cow && fire_cow.hasOwnProperty('default') ? fire_cow['default'] : fire_cow;
fox_cow = fox_cow && fox_cow.hasOwnProperty('default') ? fox_cow['default'] : fox_cow;
ghost_cow = ghost_cow && ghost_cow.hasOwnProperty('default') ? ghost_cow['default'] : ghost_cow;
glados_cow = glados_cow && glados_cow.hasOwnProperty('default') ? glados_cow['default'] : glados_cow;
goat2_cow = goat2_cow && goat2_cow.hasOwnProperty('default') ? goat2_cow['default'] : goat2_cow;
goldenEagle_cow = goldenEagle_cow && goldenEagle_cow.hasOwnProperty('default') ? goldenEagle_cow['default'] : goldenEagle_cow;
hand_cow = hand_cow && hand_cow.hasOwnProperty('default') ? hand_cow['default'] : hand_cow;
happyWhale_cow = happyWhale_cow && happyWhale_cow.hasOwnProperty('default') ? happyWhale_cow['default'] : happyWhale_cow;
hippie_cow = hippie_cow && hippie_cow.hasOwnProperty('default') ? hippie_cow['default'] : hippie_cow;
hiya_cow = hiya_cow && hiya_cow.hasOwnProperty('default') ? hiya_cow['default'] : hiya_cow;
hiyoko_cow = hiyoko_cow && hiyoko_cow.hasOwnProperty('default') ? hiyoko_cow['default'] : hiyoko_cow;
homer_cow = homer_cow && homer_cow.hasOwnProperty('default') ? homer_cow['default'] : homer_cow;
hypno_cow = hypno_cow && hypno_cow.hasOwnProperty('default') ? hypno_cow['default'] : hypno_cow;
ibm_cow = ibm_cow && ibm_cow.hasOwnProperty('default') ? ibm_cow['default'] : ibm_cow;
iwashi_cow = iwashi_cow && iwashi_cow.hasOwnProperty('default') ? iwashi_cow['default'] : iwashi_cow;
jellyfish_cow = jellyfish_cow && jellyfish_cow.hasOwnProperty('default') ? jellyfish_cow['default'] : jellyfish_cow;
karl_marx_cow = karl_marx_cow && karl_marx_cow.hasOwnProperty('default') ? karl_marx_cow['default'] : karl_marx_cow;
kilroy_cow = kilroy_cow && kilroy_cow.hasOwnProperty('default') ? kilroy_cow['default'] : kilroy_cow;
king_cow = king_cow && king_cow.hasOwnProperty('default') ? king_cow['default'] : king_cow;
kitten_cow = kitten_cow && kitten_cow.hasOwnProperty('default') ? kitten_cow['default'] : kitten_cow;
knight_cow = knight_cow && knight_cow.hasOwnProperty('default') ? knight_cow['default'] : knight_cow;
lamb2_cow = lamb2_cow && lamb2_cow.hasOwnProperty('default') ? lamb2_cow['default'] : lamb2_cow;
lamb_cow = lamb_cow && lamb_cow.hasOwnProperty('default') ? lamb_cow['default'] : lamb_cow;
lightbulb_cow = lightbulb_cow && lightbulb_cow.hasOwnProperty('default') ? lightbulb_cow['default'] : lightbulb_cow;
lobster_cow = lobster_cow && lobster_cow.hasOwnProperty('default') ? lobster_cow['default'] : lobster_cow;
lollerskates_cow = lollerskates_cow && lollerskates_cow.hasOwnProperty('default') ? lollerskates_cow['default'] : lollerskates_cow;
mailchimp_cow = mailchimp_cow && mailchimp_cow.hasOwnProperty('default') ? mailchimp_cow['default'] : mailchimp_cow;
mazeRunner_cow = mazeRunner_cow && mazeRunner_cow.hasOwnProperty('default') ? mazeRunner_cow['default'] : mazeRunner_cow;
minotaur_cow = minotaur_cow && minotaur_cow.hasOwnProperty('default') ? minotaur_cow['default'] : minotaur_cow;
monaLisa_cow = monaLisa_cow && monaLisa_cow.hasOwnProperty('default') ? monaLisa_cow['default'] : monaLisa_cow;
mooghidjirah_cow = mooghidjirah_cow && mooghidjirah_cow.hasOwnProperty('default') ? mooghidjirah_cow['default'] : mooghidjirah_cow;
moojira_cow = moojira_cow && moojira_cow.hasOwnProperty('default') ? moojira_cow['default'] : moojira_cow;
mule_cow = mule_cow && mule_cow.hasOwnProperty('default') ? mule_cow['default'] : mule_cow;
nyan_cow = nyan_cow && nyan_cow.hasOwnProperty('default') ? nyan_cow['default'] : nyan_cow;
octopus_cow = octopus_cow && octopus_cow.hasOwnProperty('default') ? octopus_cow['default'] : octopus_cow;
okazu_cow = okazu_cow && okazu_cow.hasOwnProperty('default') ? okazu_cow['default'] : okazu_cow;
owl_cow = owl_cow && owl_cow.hasOwnProperty('default') ? owl_cow['default'] : owl_cow;
pawn_cow = pawn_cow && pawn_cow.hasOwnProperty('default') ? pawn_cow['default'] : pawn_cow;
periodicTable_cow = periodicTable_cow && periodicTable_cow.hasOwnProperty('default') ? periodicTable_cow['default'] : periodicTable_cow;
personalitySphere_cow = personalitySphere_cow && personalitySphere_cow.hasOwnProperty('default') ? personalitySphere_cow['default'] : personalitySphere_cow;
pinballMachine_cow = pinballMachine_cow && pinballMachine_cow.hasOwnProperty('default') ? pinballMachine_cow['default'] : pinballMachine_cow;
psychiatrichelp2_cow = psychiatrichelp2_cow && psychiatrichelp2_cow.hasOwnProperty('default') ? psychiatrichelp2_cow['default'] : psychiatrichelp2_cow;
psychiatrichelp_cow = psychiatrichelp_cow && psychiatrichelp_cow.hasOwnProperty('default') ? psychiatrichelp_cow['default'] : psychiatrichelp_cow;
pterodactyl_cow = pterodactyl_cow && pterodactyl_cow.hasOwnProperty('default') ? pterodactyl_cow['default'] : pterodactyl_cow;
queen_cow = queen_cow && queen_cow.hasOwnProperty('default') ? queen_cow['default'] : queen_cow;
R2D2_cow = R2D2_cow && R2D2_cow.hasOwnProperty('default') ? R2D2_cow['default'] : R2D2_cow;
radio_cow = radio_cow && radio_cow.hasOwnProperty('default') ? radio_cow['default'] : radio_cow;
renge_cow = renge_cow && renge_cow.hasOwnProperty('default') ? renge_cow['default'] : renge_cow;
robot_cow = robot_cow && robot_cow.hasOwnProperty('default') ? robot_cow['default'] : robot_cow;
robotfindskitten_cow = robotfindskitten_cow && robotfindskitten_cow.hasOwnProperty('default') ? robotfindskitten_cow['default'] : robotfindskitten_cow;
roflcopter_cow = roflcopter_cow && roflcopter_cow.hasOwnProperty('default') ? roflcopter_cow['default'] : roflcopter_cow;
rook_cow = rook_cow && rook_cow.hasOwnProperty('default') ? rook_cow['default'] : rook_cow;
sachiko_cow = sachiko_cow && sachiko_cow.hasOwnProperty('default') ? sachiko_cow['default'] : sachiko_cow;
seahorseBig_cow = seahorseBig_cow && seahorseBig_cow.hasOwnProperty('default') ? seahorseBig_cow['default'] : seahorseBig_cow;
seahorse_cow = seahorse_cow && seahorse_cow.hasOwnProperty('default') ? seahorse_cow['default'] : seahorse_cow;
shikato_cow = shikato_cow && shikato_cow.hasOwnProperty('default') ? shikato_cow['default'] : shikato_cow;
shrug_cow = shrug_cow && shrug_cow.hasOwnProperty('default') ? shrug_cow['default'] : shrug_cow;
smilingOctopus_cow = smilingOctopus_cow && smilingOctopus_cow.hasOwnProperty('default') ? smilingOctopus_cow['default'] : smilingOctopus_cow;
snoopy_cow = snoopy_cow && snoopy_cow.hasOwnProperty('default') ? snoopy_cow['default'] : snoopy_cow;
snoopyhouse_cow = snoopyhouse_cow && snoopyhouse_cow.hasOwnProperty('default') ? snoopyhouse_cow['default'] : snoopyhouse_cow;
snoopysleep_cow = snoopysleep_cow && snoopysleep_cow.hasOwnProperty('default') ? snoopysleep_cow['default'] : snoopysleep_cow;
spidercow_cow = spidercow_cow && spidercow_cow.hasOwnProperty('default') ? spidercow_cow['default'] : spidercow_cow;
squid_cow = squid_cow && squid_cow.hasOwnProperty('default') ? squid_cow['default'] : squid_cow;
sudowoodo_cow = sudowoodo_cow && sudowoodo_cow.hasOwnProperty('default') ? sudowoodo_cow['default'] : sudowoodo_cow;
tableflip_cow = tableflip_cow && tableflip_cow.hasOwnProperty('default') ? tableflip_cow['default'] : tableflip_cow;
taxi_cow = taxi_cow && taxi_cow.hasOwnProperty('default') ? taxi_cow['default'] : taxi_cow;
template_cow = template_cow && template_cow.hasOwnProperty('default') ? template_cow['default'] : template_cow;
threader_cow = threader_cow && threader_cow.hasOwnProperty('default') ? threader_cow['default'] : threader_cow;
threecubes_cow = threecubes_cow && threecubes_cow.hasOwnProperty('default') ? threecubes_cow['default'] : threecubes_cow;
toaster_cow = toaster_cow && toaster_cow.hasOwnProperty('default') ? toaster_cow['default'] : toaster_cow;
tortoise_cow = tortoise_cow && tortoise_cow.hasOwnProperty('default') ? tortoise_cow['default'] : tortoise_cow;
tuxBig_cow = tuxBig_cow && tuxBig_cow.hasOwnProperty('default') ? tuxBig_cow['default'] : tuxBig_cow;
tweetyBird_cow = tweetyBird_cow && tweetyBird_cow.hasOwnProperty('default') ? tweetyBird_cow['default'] : tweetyBird_cow;
USA_cow = USA_cow && USA_cow.hasOwnProperty('default') ? USA_cow['default'] : USA_cow;
vader_cow = vader_cow && vader_cow.hasOwnProperty('default') ? vader_cow['default'] : vader_cow;
weepingAngel_cow = weepingAngel_cow && weepingAngel_cow.hasOwnProperty('default') ? weepingAngel_cow['default'] : weepingAngel_cow;
wizard_cow = wizard_cow && wizard_cow.hasOwnProperty('default') ? wizard_cow['default'] : wizard_cow;
wood_cow = wood_cow && wood_cow.hasOwnProperty('default') ? wood_cow['default'] : wood_cow;
world_cow = world_cow && world_cow.hasOwnProperty('default') ? world_cow['default'] : world_cow;
yasuna_01_cow = yasuna_01_cow && yasuna_01_cow.hasOwnProperty('default') ? yasuna_01_cow['default'] : yasuna_01_cow;
yasuna_02_cow = yasuna_02_cow && yasuna_02_cow.hasOwnProperty('default') ? yasuna_02_cow['default'] : yasuna_02_cow;
yasuna_03a_cow = yasuna_03a_cow && yasuna_03a_cow.hasOwnProperty('default') ? yasuna_03a_cow['default'] : yasuna_03a_cow;
yasuna_03_cow = yasuna_03_cow && yasuna_03_cow.hasOwnProperty('default') ? yasuna_03_cow['default'] : yasuna_03_cow;
yasuna_04_cow = yasuna_04_cow && yasuna_04_cow.hasOwnProperty('default') ? yasuna_04_cow['default'] : yasuna_04_cow;
yasuna_05_cow = yasuna_05_cow && yasuna_05_cow.hasOwnProperty('default') ? yasuna_05_cow['default'] : yasuna_05_cow;
yasuna_06_cow = yasuna_06_cow && yasuna_06_cow.hasOwnProperty('default') ? yasuna_06_cow['default'] : yasuna_06_cow;
yasuna_07_cow = yasuna_07_cow && yasuna_07_cow.hasOwnProperty('default') ? yasuna_07_cow['default'] : yasuna_07_cow;
yasuna_08_cow = yasuna_08_cow && yasuna_08_cow.hasOwnProperty('default') ? yasuna_08_cow['default'] : yasuna_08_cow;
yasuna_09_cow = yasuna_09_cow && yasuna_09_cow.hasOwnProperty('default') ? yasuna_09_cow['default'] : yasuna_09_cow;
yasuna_10_cow = yasuna_10_cow && yasuna_10_cow.hasOwnProperty('default') ? yasuna_10_cow['default'] : yasuna_10_cow;
yasuna_11_cow = yasuna_11_cow && yasuna_11_cow.hasOwnProperty('default') ? yasuna_11_cow['default'] : yasuna_11_cow;
yasuna_12_cow = yasuna_12_cow && yasuna_12_cow.hasOwnProperty('default') ? yasuna_12_cow['default'] : yasuna_12_cow;
yasuna_13_cow = yasuna_13_cow && yasuna_13_cow.hasOwnProperty('default') ? yasuna_13_cow['default'] : yasuna_13_cow;
yasuna_14_cow = yasuna_14_cow && yasuna_14_cow.hasOwnProperty('default') ? yasuna_14_cow['default'] : yasuna_14_cow;
yasuna_16_cow = yasuna_16_cow && yasuna_16_cow.hasOwnProperty('default') ? yasuna_16_cow['default'] : yasuna_16_cow;
yasuna_17_cow = yasuna_17_cow && yasuna_17_cow.hasOwnProperty('default') ? yasuna_17_cow['default'] : yasuna_17_cow;
yasuna_18_cow = yasuna_18_cow && yasuna_18_cow.hasOwnProperty('default') ? yasuna_18_cow['default'] : yasuna_18_cow;
yasuna_19_cow = yasuna_19_cow && yasuna_19_cow.hasOwnProperty('default') ? yasuna_19_cow['default'] : yasuna_19_cow;
yasuna_20_cow = yasuna_20_cow && yasuna_20_cow.hasOwnProperty('default') ? yasuna_20_cow['default'] : yasuna_20_cow;
ymd_udon_cow = ymd_udon_cow && ymd_udon_cow.hasOwnProperty('default') ? ymd_udon_cow['default'] : ymd_udon_cow;
zenNohMilk_cow = zenNohMilk_cow && zenNohMilk_cow.hasOwnProperty('default') ? zenNohMilk_cow['default'] : zenNohMilk_cow;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var ansiRegex = createCommonjsModule(function (module) {
'use strict';

module.exports = () => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, 'g');
};
});

var stripAnsi = input => typeof input === 'string' ? input.replace(ansiRegex(), '') : input;

var isFullwidthCodePoint = createCommonjsModule(function (module) {
'use strict';
/* eslint-disable yoda */
module.exports = x => {
	if (Number.isNaN(x)) {
		return false;
	}

	// code points are derived from:
	// http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
	if (
		x >= 0x1100 && (
			x <= 0x115f ||  // Hangul Jamo
			x === 0x2329 || // LEFT-POINTING ANGLE BRACKET
			x === 0x232a || // RIGHT-POINTING ANGLE BRACKET
			// CJK Radicals Supplement .. Enclosed CJK Letters and Months
			(0x2e80 <= x && x <= 0x3247 && x !== 0x303f) ||
			// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
			(0x3250 <= x && x <= 0x4dbf) ||
			// CJK Unified Ideographs .. Yi Radicals
			(0x4e00 <= x && x <= 0xa4c6) ||
			// Hangul Jamo Extended-A
			(0xa960 <= x && x <= 0xa97c) ||
			// Hangul Syllables
			(0xac00 <= x && x <= 0xd7a3) ||
			// CJK Compatibility Ideographs
			(0xf900 <= x && x <= 0xfaff) ||
			// Vertical Forms
			(0xfe10 <= x && x <= 0xfe19) ||
			// CJK Compatibility Forms .. Small Form Variants
			(0xfe30 <= x && x <= 0xfe6b) ||
			// Halfwidth and Fullwidth Forms
			(0xff01 <= x && x <= 0xff60) ||
			(0xffe0 <= x && x <= 0xffe6) ||
			// Kana Supplement
			(0x1b000 <= x && x <= 0x1b001) ||
			// Enclosed Ideographic Supplement
			(0x1f200 <= x && x <= 0x1f251) ||
			// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
			(0x20000 <= x && x <= 0x3fffd)
		)
	) {
		return true;
	}

	return false;
};
});

var stringWidth = createCommonjsModule(function (module) {
'use strict';



module.exports = str => {
	if (typeof str !== 'string' || str.length === 0) {
		return 0;
	}

	str = stripAnsi(str);

	let width = 0;

	for (let i = 0; i < str.length; i++) {
		const code = str.codePointAt(i);

		// Ignore control characters
		if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
			continue;
		}

		// Ignore combining characters
		if (code >= 0x300 && code <= 0x36F) {
			continue;
		}

		// Surrogates
		if (code > 0xFFFF) {
			i++;
		}

		width += isFullwidthCodePoint(code) ? 2 : 1;
	}

	return width;
};
});

var say$1 = function (text, wrap) {
	var delimiters = {
		first : ["/", "\\"],
		middle : ["|", "|"],
		last : ["\\", "/"],
		only : ["<", ">"]
	};

	return format(text, wrap, delimiters);
};

var think$1 = function (text, wrap) {
	var delimiters = {
		first : ["(", ")"],
		middle : ["(", ")"],
		last : ["(", ")"],
		only : ["(", ")"]
	};

	return format(text, wrap, delimiters);
};

function format (text, wrap, delimiters) {
	var lines = split(text, wrap);
	var maxLength = max(lines);

	var balloon;
	if (lines.length === 1) {
		balloon = [
			" " + top(maxLength),
			delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
			" " + bottom(maxLength)
		];
	} else {
		balloon = [" " + top(maxLength)];

		for (var i = 0, len = lines.length; i < len; i += 1) {
			var delimiter;

			if (i === 0) {
				delimiter = delimiters.first;
			} else if (i === len - 1) {
				delimiter = delimiters.last;
			} else {
				delimiter = delimiters.middle;
			}

			balloon.push(delimiter[0] + " " + pad(lines[i], maxLength) + " " + delimiter[1]);
		}

		balloon.push(" " + bottom(maxLength));
	}

	return balloon.join("\n");
}

function split (text, wrap) {
	text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '').replace(/\t/g, '        ');

	var lines = [];
	if (!wrap) {
		lines = text.split("\n");
	} else {
		var start = 0;
		while (start < text.length) {
			var nextNewLine = text.indexOf("\n", start);

			var wrapAt = Math.min(start + wrap, nextNewLine === -1 ? text.length : nextNewLine);

			lines.push(text.substring(start, wrapAt));
			start = wrapAt;

			// Ignore next new line
			if (text.charAt(start) === "\n") {
				start += 1;
			}
		}
	}

	return lines;
}

function max (lines) {
	var max = 0;
	for (var i = 0, len = lines.length; i < len; i += 1) {
		if (stringWidth(lines[i]) > max) {
			max = stringWidth(lines[i]);
		}
	}

	return max;
}

function pad (text, length) {
	return text + (new Array(length - stringWidth(text) + 1)).join(" ");
}

function top (length) {
	return new Array(length + 3).join("_");
}

function bottom (length) {
	return new Array(length + 3).join("-");
}

var balloon = {
	say: say$1,
	think: think$1
};

var replacer = function (cow, variables) {
	var eyes = escapeRe(variables.eyes);
	var eyeL = eyes.charAt(0);
	var eyeR = eyes.charAt(1);
	var tongue = escapeRe(variables.tongue);

	if (cow.indexOf("$the_cow") !== -1) {
		cow = extractTheCow(cow);
	}

	return cow
		.replace(/\$thoughts/g, variables.thoughts)
		.replace(/\$eyes/g, eyes)
		.replace(/\$tongue/g, tongue)
		.replace(/\$\{eyes\}/g, eyes)
		.replace(/\$eye/, eyeL)
		.replace(/\$eye/, eyeR)
		.replace(/\$\{tongue\}/g, tongue)
	;
};

/*
 * "$" dollar signs must be doubled before being used in a regex replace
 * This can occur in eyes or tongue.
 * For example:
 *
 * cowsay -g Moo!
 *
 * cowsay -e "\$\$" Moo!
 */
function escapeRe (s) {
	if (s && s.replace) {
		return s.replace(/\$/g, "$$$$");
	}
	return s;
}

function extractTheCow (cow) {
	cow = cow.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');
	var match = /\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(cow);

	if (!match) {
		console.error("Cannot parse cow file\n", cow);
		return cow;
	} else {
		return match[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$");
	}
}

var modes = {
	"b" : {
		eyes : "==",
		tongue : "  "
	},
	"d" : {
		eyes : "xx",
		tongue : "U "
	},
	"g" : {
		eyes : "$$",
		tongue : "  "
	},
	"p" : {
		eyes : "@@",
		tongue : "  "
	},
	"s" : {
		eyes : "**",
		tongue : "U "
	},
	"t" : {
		eyes : "--",
		tongue : "  "
	},
	"w" : {
		eyes : "OO",
		tongue : "  "
	},
	"y" : {
		eyes : "..",
		tongue : "  "
	}
};

var faces = function (options) {
	for (var mode in modes) {
		if (options[mode] === true) {
			return modes[mode];
		}
	}

	return {
		eyes : options.e || "oo",
		tongue : options.T || "  "
	};
};

var DEFAULT_COW = "$the_cow = <<\"EOC\";\n        $thoughts   ^__^\n         $thoughts  ($eyes)\\\\_______\n            (__)\\\\       )\\\\/\\\\\n             $tongue ||----w |\n                ||     ||\nEOC\n";

var beavis_zen = "##\n## Beavis, with Zen philosophy removed.\n##\n$the_cow = <<EOC;\n   $thoughts         __------~~-,\n    $thoughts      ,'            ,\n          /               \\\\\n         /                :\n        |                  '\n        |                  |\n        |                  |\n         |   _--           |\n         _| =-.     .-.   ||\n         $eye|/$eye/       _.   |\n         /  ~          \\\\ |\n       (____\\@)  ___~    |\n          |_===~~~.`    |\n       _______.--~     |\n       \\\\________       |\n                \\\\      |\n              __/-___-- -__\n             /            _ \\\\\nEOC\n";

var bong = "##\n## A cow with a bong, from lars@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n            ^__^ \n    _______/($eyes)\n/\\\\/(       /(__)\n   | W----|| |~|\n   ||     || |~|  ~~\n             |~|  ~\n             |_| o\n             |#|/\n            _+#+_\nEOC\n";

var budFrogs = "##\n## The Budweiser frogs\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n          oO)-.                       .-(Oo\n         /__  _\\\\                     /_  __\\\\\n         \\\\  \\\\(  |     ()~()         |  )/  /\n          \\\\__|\\\\ |    (-___-)        | /|__/\n          '  '--'    ==`-'==        '--'  '\nEOC\n";

var bunny = "##\n## A cute little wabbit\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts   \\\\\n        \\\\ /\\\\\n        ( )\n      .( o ).\nEOC\n";

var cheese = "##\n## The cheese from milk & cheese\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n      _____   _________\n     /     \\\\_/         |\n    |                 ||\n    |                 ||\n   |    ###\\\\  /###   | |\n   |     $eye  \\\\/  $eye    | |\n  /|                 | |\n / |        <        |\\\\ \\\\\n| /|                 | | |\n| |     \\\\_______/   |  | |\n| |        $tongue       | / /\n/||                 /|||\n   ----------------|\n        | |    | |\n        ***    ***\n       /___\\\\  /___\\\\\nEOC\n";

var cower = "##\n## A cowering cow\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n        ,__, |    | \n        ($eyes)\\\\|    |___\n        (__)\\\\|    |   )\\\\_\n         $tongue  |    |_w |  \\\\\n             |    |  ||   *\n\n             Cower....\nEOC\n";

var daemon = "##\n## 4.4 >> 5.4\n##\n$the_cow = <<EOC;\n   $thoughts         ,        ,\n    $thoughts       /(        )`\n     $thoughts      \\\\ \\\\___   / |\n            /- _  `-/  '\n           (/\\\\/ \\\\ \\\\   /\\\\\n           / /   | `    \\\\\n           $eye $eye   ) /    |\n           `-^--'`<     '\n          (_.)  _  )   /\n           `.___/`    /\n             `-----' /\n<----.     __ / __   \\\\\n<----|====O)))==) \\\\) /====\n<----'    `--' `.__,' \\\\\n             |        |\n              \\\\       /\n        ______( (_  / \\\\______\n      ,'  ,-----'   |        \\\\\n      `--{__________)        \\\\/\nEOC\n";

var doge = "##\n## Doge\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n\n           _                _\n          / /.           _-//\n         / ///         _-   /\n        //_-//=========     /\n      _///        //_ ||   ./\n    _|                 -__-||\n   |  __              - \\\\   \\\n  |  |#-       _-|_           |\n  |            |#|||       _   |  \n |  _==_                       ||\n- ==|.=.=|_ =                  |\n|  |-|-  ___                  |\n|    --__   _                /\n||     ===                  |\n |                     _. //\n  ||_         __-   _-  _|\n     \\_______/  ___/  _|\n                   --*\nEOC\n";

var dragonAndCow = "##\n## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n                       $thoughts                    ^    /^\n                        $thoughts                  / \\\\  // \\\\\n                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\\n                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*\n                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |\n                            \\@___\\@`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\\n                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\\n                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |\n                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /\n                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /\n                             ,-}        _      *-.|.-~-.           .~    ~\n            \\\\     \\\\__/        `/\\\\      /                 ~-. _ .-~      /\n             \\\\____($eyes)           *.   }            {                   /\n             (    (--)          .----~-.\\\\        \\\\-`                 .~\n             //__\\\\\\\\$tongue\\\\__ Ack!   ///.----..<        \\\\             _ -~\n            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~\nEOC\n";

var dragon = "##\n## The Whitespace Dragon\n##\n$the_cow = <<EOC;\n      $thoughts                    / \\\\  //\\\\\n       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\\n            /$eye  $eye  \\\\__  /    //  | \\\\ \\\\    \n           /     /  \\\\/_/    //   |  \\\\  \\\\  \n           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ \n           //_^_/     \\\\/_ //     |    \\\\    \\\\\n        ( //) |        \\\\///      |     \\\\     \\\\\n      ( / /) _|_ /   )  //       |      \\\\     _\\\\\n    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.\n  (( / / )) ,-{        _      `-.|.-~-.           .~         `.\n (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\\n (( /// ))      `.   {            }                   /      \\\\  \\\\\n  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  `. \\\\^-.\n             ///.----..>        \\\\             _ -~             `.  ^-`  ^-_\n               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~\n                                                                  /.-~\nEOC\n";

var elephantInSnake = "##\n## Do we need to explain this?\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts              ....       \n           ........    .      \n          .            .      \n         .             .      \n.........              .......\n..............................\n\nElephant inside ASCII snake\nEOC\n";

var eyes = "##\n## Evil-looking eyes\n##\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n                                   .::!!!!!!!:.\n  .!!!!!:.                        .:!!!!!!!!!!!!\n  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ \n      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P \n      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$\"  \\$\\$\\$\\$\\$\\$\\$\\$# \n      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* \n      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R\" \n        \"*\\$bd\\$\\$\\$\\$      '*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#\" \n             \"\"\"\"          \"\"\"\"\"\"\" \nEOC\n";

var flamingSheep = "##\n## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)\n##\n$the_cow = <<EOC;\n  $thoughts            .    .     .   \n   $thoughts      .  . .     `  ,     \n    $thoughts    .; .  : .' :  :  : . \n     $thoughts   i..`: i` i.i.,i  i . \n      $thoughts   `,--.|i |i|ii|ii|i: \n           U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.||' \n           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  \n             $tongue (\\@\\@\\@\\@\\@\\@\\@\\@)    \n                `YY~~~~YY'    \n                 ||    ||     \nEOC\n";

var ghostbusters = "##\n## Ghostbusters!\n##\n$the_cow = <<EOC;\n          $thoughts\n           $thoughts\n            $thoughts          __---__\n                    _-       /--______\n               __--( /     \\\\ )XXXXXXXXXXX\\\\v.\n             .-XXX(   $eye   $eye  )XXXXXXXXXXXXXXX-\n            /XXX(       U     )        XXXXXXX\\\\\n          /XXXXX(              )--_  XXXXXXXXXXX\\\\\n         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\\n         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX\n         XXXXXX__/          XXXXXX         \\\\__---->\n ---___  XXX__/          XXXXXX      \\\\__         /\n   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=\n    \\\\-\\\\    ___/    XXXXXX              '--- XXXXXX\n       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX\n         \\\\XXXXXXXXX   \\\\                    /XXXXX/\n          \\\\XXXXXX      >                 _/XXXXX/\n            \\\\XXXXX--__/              __-- XXXX/\n             -XXXXXXXX---------------  XXXXXX-\n                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/\n                  \"\"VXXXXXXXXXXXXXXXXXXV\"\"\nEOC\n";

var goat = "##\n## ejm97 http://www.ascii-art.de/ascii/ghi/goat.txt\n##\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n         $thoughts  _))\n           > $eye\\\\     _~\n           `;'\\\\\\\\__-' \\\\_\n              | )  _ \\\\ \\\\\n             / / ``   w w\n            w w\nEOC\n\n\n\n\n\n";

var hedgehog = "##\n## A cute little hedgehog\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts ..:::::::::.\n    ::::::::::::::\n   /. `::::::::::::\n  O__,_:::::::::::'\nEOC\n";

var hellokitty = "##\n## Hello Kitty\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n      /\\\\_)o<\n     |      \\\\\n     | $eye . $eye|\n      \\\\_____/\n         $tongue\nEOC\n";

var kiss = "##\n## A lovers' empbrace\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n             ,;;;;;;;,\n            ;;;;;;;;;;;,\n           ;;;;;'_____;'\n           ;;;(/))))|((\\\\\n           _;;((((((|))))\n          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n     .--~(  \\\\ ~))))))))))))\n    /     \\\\  `\\\\-(((((((((((\\\\\\\\\n    |    | `\\\\   ) |\\\\       /|)\n     |    |  `. _/  \\\\_____/ |\n      |    , `\\\\~            /\n       |    \\\\  \\\\           /\n      | `.   `\\\\|          /\n      |   ~-   `\\\\        /\n       \\\\____~._/~ -_,   (\\\\\n        |-----|\\\\   \\\\    ';;\n       |      | :;;;'     \\\\\n      |  /    |            |\n      |       |            |\nEOC\n";

var kitty = "##\n## A kitten of sorts, I think\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n       (\"`-'  '-/\") .___..--' ' \"`-._\n         ` $eye_ $eye  )    `-.   (      ) .`-.__. `)\n         (_Y_.) ' ._   )   `._` ;  `` -. .-'\n      _.. `--'_..-_/   /--' _ .' ,4\n   ( i l ),-''  ( l i),'  ( ( ! .-'    \nEOC\n";

var koala = "##\n## From the canonical koala collection\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n       ___  \n     {~$eye_$eye~}\n      ( Y )\n     ()~*~()   \n     (_)-(_)   \nEOC\n";

var kosh = "##\n## It's a Kosh Cow!\n##\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n      $thoughts\n  ___       _____     ___\n /   \\\\     /    /|   /   \\\\\n|     |   /    / |  |     |\n|     |  /____/  |  |     |     \n|     |  |    |  |  |     |\n|     |  | {} | /   |     |\n|     |  |____|/    |     |\n|     |    |==|     |     |\n|      \\\\___________/      |\n|                         |\n|                         |\nEOC\n";

var lukeKoala = "##\n## From the canonical koala collection\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts          .\n       ___   //\n     {~$eye_$eye~}// \n      ( Y )K/  \n     ()~*~()   \n     (_)-(_)   \n     Luke    \n     Sywalker\n     koala   \nEOC\n";

var mechAndCow = "$the_cow = <<EOC;\n      $thoughts                            |     |\n       $thoughts                        ,--|     |-.\n                         __,----|  |     | |\n                       ,;::     |  `_____' |\n                       `._______|    i^i   |\n                                `----| |---'| .\n                           ,-------._| |== ||//\n                           |       |_|P`.  /'/\n                           `-------' 'Y Y/'/'\n                                     .==\\ /_\\\n   ^__^                             /   /'|  `i\n   ($eyes)\\_______                   /'   /  |   |\n   (__)\\       )\\/\\             /'    /   |   `i\n    $tongue ||----w |           ___,;`----'.___L_,-'`\\__\n       ||     ||          i_____;----\\.____i\"\"\\____\\\nEOC\n";

var meow = "##\n## A meowing tiger?\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts ,   _ ___.--'''`--''//-,-_--_.\n      \\\\`\"' ` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\`,_\n     /'`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ `-,\n    /\\$eye\"\\\\  ` \\\\ `\\\\ |  | ||/ // | \\\\/  \\\\  `-._`-,_.,\n   /  _.-. `.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     `-._._)\n   `-'``/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\\n    $tongue  `-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |\n          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'\n         (((__/(((_.' ((___..-'((__,'\nEOC\n";

var milk = "##\n## Milk from Milk and Cheese\n##\n$the_cow = <<EOC;\n $thoughts     ____________ \n  $thoughts    |__________|\n      /           /\\\\\n     /           /  \\\\\n    /___________/___/|\n    |          |     |\n    |  ==\\\\ /== |     |\n    |   $eye   $eye  | \\\\ \\\\ |\n    |     <    |  \\\\ \\\\|\n   /|          |   \\\\ \\\\\n  / |  \\\\_____/ |   / /\n / /|    $tongue    |  / /|\n/||\\\\|          | /||\\\\/\n    -------------|   \n        | |    | | \n       <__/    \\\\__>\nEOC\n";

var moofasa = "##\n## MOOfasa.\n##\n$the_cow = <<EOC;\n       $thoughts    ____\n        $thoughts  /    \\\\\n          | ^__^ |\n          | ($eyes) |______\n          | (__) |      )\\\\/\\\\\n           \\\\____/|----w |\n                ||     ||\n\n\t         Moofasa\nEOC\n";

var moose = "$the_cow = <<EOC;\n  $thoughts\n   $thoughts   \\\\_\\\\_    _/_/\n    $thoughts      \\\\__/\n           ($eyes)\\\\_______\n           (__)\\\\       )\\\\/\\\\\n            $tongue ||----- |\n               ||     ||\nEOC\n";

var mutilated = "##\n## A mutilated cow, from aspolito@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n       $thoughts   \\\\_______\n v__v   $thoughts  \\\\   O   )\n ($eyes)      ||----w |\n (__)      ||     ||  \\\\/\\\\\n  $tongue\nEOC\n";

var ren = "##\n## Ren \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n    ____  \n   /# /_\\\\_\n  |  |/$eye\\\\$eye\\\\\n  |  \\\\\\\\_/_/\n / |_   |  \n|  ||\\\\_ ~| \n|  ||| \\\\/  \n|  |||_    \n \\\\//  |    \n  ||  |    \n  ||_  \\\\   \n  \\\\_|  o|  \n  /\\\\___/   \n /  ||||__ \n    (___)_)\nEOC\n";

var satanic = "##\n## Satanic cow, source unknown.\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts  (__)  \n         (\\\\/)  \n  /-------\\\\/    \n / | 666 ||$tongue  \n*  ||----||      \n   ~~    ~~      \nEOC\n";

var sheep = "##\n## The non-flaming sheep.\n##\n$the_cow = <<EOC\n  $thoughts\n   $thoughts\n       __     \n      U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.\n      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)\n        $tongue (\\@\\@\\@\\@\\@\\@\\@\\@)\n           `YY~~~~YY'\n            ||    ||\nEOC\n";

var skeleton = "##\n## This 'Scowleton' brought to you by one of \n## {appel,kube,rowe}@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n          $thoughts      (__)      \n           $thoughts     /$eyes|  \n            $thoughts   (_\"_)*+++++++++*\n                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\\n                   I[I|I|||||I I `\n                   I`I'///'' I I\n                   I I       I I\n                   ~ ~       ~ ~\n                     Scowleton\nEOC\n";

var small = "##\n## A small cow, artist unknown\n##\n$eyes = \"..\" unless ($eyes);\n$the_cow = <<EOC;\n       $thoughts   ,__,\n        $thoughts  ($eyes)____\n           (__)    )\\\\\n            $tongue||--|| *\nEOC\n";

var squirrel = "$the_cow = <<EOC;\n  $thoughts\n     $thoughts\n                  _ _\n       | \\__/|  .~    ~.\n       /$eyes `./      .'\n      {o__,   \\    {\n        / .  . )    \\\n        `-` '-' \\    }\n       .(   _(   )_.'\n      '---.~_ _ _|\n                                                     \nEOC\n";

var stegosaurus = "##\n## A stegosaur with a top hat?\n##\n$the_cow = <<EOC;\n$thoughts                             .       .\n $thoughts                           / `.   .' \" \n  $thoughts                  .---.  <    > <    >  .---.\n   $thoughts                 |    \\\\  \\\\ - ~ ~ - /  /    |\n         _____          ..-~             ~-..-~\n        |     |   \\\\~~~\\\\.'                    `./~~~/\n       ---------   \\\\__/                        \\\\__/\n      .'  $eye    \\\\     /               /       \\\\  \" \n     (_____,    `._.'               |         }  \\\\/~~~/\n      `----.          /       }     |        /    \\\\__/\n            `-.      |       /      |       /      `. ,~~|\n                ~-.__|      /_ - ~ ^|      /- _      `..-‘ / \\\\  /\\\\\n                     |     /        |     /     ~-.     `-/ _ \\\\/__\\\\\n                     |_____|        |_____|         ~ - . _ _ _ _ _>\nEOC\n";

var stimpy = "##\n## Stimpy!\n##\n$the_cow = <<EOC;\n  $thoughts     .    _  .    \n   $thoughts    |\\\\_|/__/|    \n       / / \\\\/ \\\\  \\\\  \n      /__|$eye||$eye|__ \\\\ \n     |/_ \\\\_/\\\\_/ _\\\\ |  \n     | | (____) | ||  \n     \\\\/\\\\___/\\\\__/  // \n     (_/         ||\n      |          ||\n      |          ||\\\\   \n       \\\\        //_/  \n        \\\\______//\n       __ || __||\n      (____(____)\nEOC\n";

var supermilker = "##\n## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)\n##\n$the_cow = <<EOC;\n  $thoughts   ^__^\n   $thoughts  ($eyes)\\\\_______        ________\n      (__)\\\\       )\\\\/\\\\    |Super |\n       $tongue ||----W |       |Milker|\n          ||    UDDDDDDDDD|______|\nEOC\n";

var surgery = "##\n## A cow operation, artist unknown\n##\n$the_cow = <<EOC;\n          $thoughts           \\\\  / \n           $thoughts           \\\\/  \n               (__)    /\\\\         \n               ($eyes)   O  O        \n               _\\\\/_   //         \n         *    (    ) //       \n          \\\\  (\\\\\\\\    //       \n           \\\\(  \\\\\\\\    )                              \n            (   \\\\\\\\   )   /\\\\                          \n  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     \n |\\\\__[=======______//________)__\\\\                    \n \\\\|_______________//____________|                    \n     |||      || //||     |||\n     |||      || @.||     |||                        \n      ||      \\\\/  .\\\\/      ||                        \n                 . .                                 \n                '.'.`                                \n\n            COW-OPERATION                           \nEOC\n";

var telebears = "##\n## A cow performing an unnatural act, artist unknown.\n##\n$the_cow = <<EOC;\n      $thoughts                _\n       $thoughts              (_)   <-- TeleBEARS\n        $thoughts   ^__^       / \\\\\n         $thoughts  ($eyes)\\\\_____/_\\\\ \\\\\n            (__)\\\\  you  ) /\n             $tongue ||----w ((\n                ||     ||>> \nEOC\n";

var turkey = "##\n## Turkey!\n##\n$the_cow = <<EOC;\n  $thoughts                                  ,+*^^*+___+++_\n   $thoughts                           ,*^^^^              )\n    $thoughts                       _+*                     ^**+_\n     $thoughts                    +^       _ _++*+_+++_,         )\n              _+^^*+_    (     ,+*^ ^          \\\\+_        )\n             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\\n            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )\n           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /\n          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\\n           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )\n            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /\n          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^\n         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)\n          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^\n          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)\n           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)\n             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\\n                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\\n                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)\n                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)\n                      ^^^ ^^ ^^^ ^\nEOC\n";

var turtle = "##\n## A mysterious turtle...\n##\n$the_cow = <<EOC;\n    $thoughts                                  ___-------___\n     $thoughts                             _-~~             ~~-_\n      $thoughts                         _-~                    /~-_\n             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\\n           /|  $eye|| $eye|        /      \\\\_______________/        \\\\\n          | |___||__|      /       /                \\\\          \\\\\n          |          \\\\    /      /                    \\\\          \\\\\n          |   (_______) /______/                        \\\\_________ \\\\\n          |      $tongue / /         \\\\                      /            \\\\\n           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /\n             \\\\         ||           \\\\______________/      _-_       //\\\\__//\n               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/\n                 ~-----||====/~     |==================|       |/~~~~~\n                  (_(__/  ./     /                    \\\\_\\\\      \\\\.\n                         (_(___/                         \\\\_____)_)\nEOC\n";

var tux = "##\n## TuX\n## (c) pborys@p-soft.silesia.linux.org.pl \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n        .--.\n       |$eye_$eye |\n       |:_/ |\n      //   \\\\ \\\\\n     (|     | )\n    /'\\\\_   _/`\\\\\n    \\\\___)=(___/\n\nEOC\n";

var vaderKoala = "##\n## Another canonical koala?\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts        .\n     .---.  //\n    Y|$eye $eye|Y// \n   /_(i=i)K/ \n   ~()~*~()~  \n    (_)-(_)   \n\n     Darth \n     Vader    \n     koala        \nEOC\n";

var whale = "# whale\n#\n# modified from https://www.reddit.com/r/pics/comments/25ji0n/man_face_to_face_with_whale/chi1kdy?context=3\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n     $thoughts\n                '-.\n      .---._     \\\\ \\.--'\n    /       `-..__)  ,-'\n   |    0           /\n    \\--.__,   .__.,`\n     `-.___'._\\\\_.'\n\nEOC\n";

var www = "##\n## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n        $thoughts   ^__^\n         $thoughts  ($eyes)\\\\_______\n            (__)\\\\       )\\\\/\\\\\n             $tongue ||--WWW |\n                ||     ||\nEOC\n";

function converToCliOptions(browserOptions) {
  const cliOptions = {
    e: browserOptions.eyes || 'oo',
    T: browserOptions.tongue || '  ',
    n: browserOptions.wrap,
    W: browserOptions.wrapLength || 40,
    text: browserOptions.text || '',
    _: browserOptions.text || [],
    f: browserOptions.cow,
  };
  if (browserOptions.mode) {
    // converts mode: 'b' to b: true
    cliOptions[browserOptions.mode] = true;
  }
  return cliOptions;
}

function doIt (options, sayAloud) {
  const cow = options.f || DEFAULT_COW;
	const face = faces(options);
	face.thoughts = sayAloud ? "\\" : "o";

	const action = sayAloud ? "say" : "think";
	return balloon[action](options.text || options._.join(" "), options.n ? null : options.W) + "\n" + replacer(cow, face);
}

function say(browserOptions) {
  return doIt(converToCliOptions(browserOptions), true);
}

function think(browserOptions) {
  return doIt(converToCliOptions(browserOptions), false);
}

exports.say = say;
exports.think = think;
exports.ACKBAR = ackbar_cow;
exports.APERTURE_BLANK = apertureBlank_cow;
exports.APERTURE = aperture_cow;
exports.ARMADILLO = armadillo_cow;
exports.ATAT = atat_cow;
exports.ATOM = atom_cow;
exports.AWESOME_FACE = awesomeFace_cow;
exports.BANANA = banana_cow;
exports.BEARFACE = bearface_cow;
exports.BEAVIS_ZEN = beavis_zen;
exports.BEES = bees_cow;
exports.BILL_THE_CAT = billTheCat_cow;
exports.BIOHAZARD = biohazard_cow;
exports.BISHOP = bishop_cow;
exports.BLACK_MESA = blackMesa_cow;
exports.BONG = bong;
exports.BOX = box_cow;
exports.BROKEN_HEART = brokenHeart_cow;
exports.BUD_FROGS = budFrogs;
exports.BUNNY = bunny;
exports.C3PO = C3PO_cow;
exports.CAKE = cake_cow;
exports.CAKE_WITH_CANDLES = cakeWithCandles_cow;
exports.CAT2 = cat2_cow;
exports.CAT = cat_cow;
exports.CATFENCE = catfence_cow;
exports.CHARIZARDVICE = charizardvice_cow;
exports.CHARLIE = charlie_cow;
exports.CHEESE = cheese;
exports.CHESSMEN = chessmen_cow;
exports.CHITO = chito_cow;
exports.CLAW_ARM = clawArm_cow;
exports.CLIPPY = clippy_cow;
exports.COMPANION_CUBE = companionCube_cow;
exports.COWER = cower;
exports.COWFEE = cowfee_cow;
exports.CTHULHU_MINI = cthulhuMini_cow;
exports.CUBE = cube_cow;
exports.DAEMON = daemon;
exports.DALEK = dalek_cow;
exports.DALEK_SHOOTING = dalekShooting_cow;
exports.DEFAULT = DEFAULT_COW;
exports.DOCKER_WHALE = dockerWhale_cow;
exports.DOGE = doge;
exports.DOLPHIN = dolphin_cow;
exports.DRAGON_AND_COW = dragonAndCow;
exports.DRAGON = dragon;
exports.EBI_FURAI = ebi_furai_cow;
exports.ELEPHANT2 = elephant2_cow;
exports.ELEPHANT = elephant_cow;
exports.ELEPHANT_IN_SNAKE = elephantInSnake;
exports.EXPLOSION = explosion_cow;
exports.EYES = eyes;
exports.FAT_BANANA = fatBanana_cow;
exports.FAT_COW = fatCow_cow;
exports.FENCE = fence_cow;
exports.FIRE = fire_cow;
exports.FLAMING_SHEEP = flamingSheep;
exports.FOX = fox_cow;
exports.GHOSTBUSTERS = ghostbusters;
exports.GHOST = ghost_cow;
exports.GLADOS = glados_cow;
exports.GOAT2 = goat2_cow;
exports.GOAT = goat;
exports.GOLDEN_EAGLE = goldenEagle_cow;
exports.HAND = hand_cow;
exports.HAPPY_WHALE = happyWhale_cow;
exports.HEDGEHOG = hedgehog;
exports.HELLOKITTY = hellokitty;
exports.HIPPIE = hippie_cow;
exports.HIYA = hiya_cow;
exports.HIYOKO = hiyoko_cow;
exports.HOMER = homer_cow;
exports.HYPNO = hypno_cow;
exports.IBM = ibm_cow;
exports.IWASHI = iwashi_cow;
exports.JELLYFISH = jellyfish_cow;
exports.KARL_MARX = karl_marx_cow;
exports.KILROY = kilroy_cow;
exports.KING = king_cow;
exports.KISS = kiss;
exports.KITTEN = kitten_cow;
exports.KITTY = kitty;
exports.KNIGHT = knight_cow;
exports.KOALA = koala;
exports.KOSH = kosh;
exports.LAMB2 = lamb2_cow;
exports.LAMB = lamb_cow;
exports.LIGHTBULB = lightbulb_cow;
exports.LOBSTER = lobster_cow;
exports.LOLLERSKATES = lollerskates_cow;
exports.LUKE_KOALA = lukeKoala;
exports.MAILCHIMP = mailchimp_cow;
exports.MAZE_RUNNER = mazeRunner_cow;
exports.MECH_AND_COW = mechAndCow;
exports.MEOW = meow;
exports.MILK = milk;
exports.MINOTAUR = minotaur_cow;
exports.MONA_LISA = monaLisa_cow;
exports.MOOFASA = moofasa;
exports.MOOGHIDJIRAH = mooghidjirah_cow;
exports.MOOJIRA = moojira_cow;
exports.MOOSE = moose;
exports.MULE = mule_cow;
exports.MUTILATED = mutilated;
exports.NYAN = nyan_cow;
exports.OCTOPUS = octopus_cow;
exports.OKAZU = okazu_cow;
exports.OWL = owl_cow;
exports.PAWN = pawn_cow;
exports.PERIODIC_TABLE = periodicTable_cow;
exports.PERSONALITY_SPHERE = personalitySphere_cow;
exports.PINBALL_MACHINE = pinballMachine_cow;
exports.PSYCHIATRICHELP2 = psychiatrichelp2_cow;
exports.PSYCHIATRICHELP = psychiatrichelp_cow;
exports.PTERODACTYL = pterodactyl_cow;
exports.QUEEN = queen_cow;
exports.R2_D2 = R2D2_cow;
exports.RADIO = radio_cow;
exports.REN = ren;
exports.RENGE = renge_cow;
exports.ROBOT = robot_cow;
exports.ROBOTFINDSKITTEN = robotfindskitten_cow;
exports.ROFLCOPTER = roflcopter_cow;
exports.ROOK = rook_cow;
exports.SACHIKO = sachiko_cow;
exports.SATANIC = satanic;
exports.SEAHORSE_BIG = seahorseBig_cow;
exports.SEAHORSE = seahorse_cow;
exports.SHEEP = sheep;
exports.SHIKATO = shikato_cow;
exports.SHRUG = shrug_cow;
exports.SKELETON = skeleton;
exports.SMALL = small;
exports.SMILING_OCTOPUS = smilingOctopus_cow;
exports.SNOOPY = snoopy_cow;
exports.SNOOPYHOUSE = snoopyhouse_cow;
exports.SNOOPYSLEEP = snoopysleep_cow;
exports.SPIDERCOW = spidercow_cow;
exports.SQUID = squid_cow;
exports.SQUIRREL = squirrel;
exports.STEGOSAURUS = stegosaurus;
exports.STIMPY = stimpy;
exports.SUDOWOODO = sudowoodo_cow;
exports.SUPERMILKER = supermilker;
exports.SURGERY = surgery;
exports.TABLEFLIP = tableflip_cow;
exports.TAXI = taxi_cow;
exports.TELEBEARS = telebears;
exports.TEMPLATE = template_cow;
exports.THREADER = threader_cow;
exports.THREECUBES = threecubes_cow;
exports.TOASTER = toaster_cow;
exports.TORTOISE = tortoise_cow;
exports.TURKEY = turkey;
exports.TURTLE = turtle;
exports.TUX_BIG = tuxBig_cow;
exports.TUX = tux;
exports.TWEETY_BIRD = tweetyBird_cow;
exports.USA = USA_cow;
exports.VADER = vader_cow;
exports.VADER_KOALA = vaderKoala;
exports.WEEPING_ANGEL = weepingAngel_cow;
exports.WHALE = whale;
exports.WIZARD = wizard_cow;
exports.WOOD = wood_cow;
exports.WORLD = world_cow;
exports.WWW = www;
exports.YASUNA_01 = yasuna_01_cow;
exports.YASUNA_02 = yasuna_02_cow;
exports.YASUNA_03A = yasuna_03a_cow;
exports.YASUNA_03 = yasuna_03_cow;
exports.YASUNA_04 = yasuna_04_cow;
exports.YASUNA_05 = yasuna_05_cow;
exports.YASUNA_06 = yasuna_06_cow;
exports.YASUNA_07 = yasuna_07_cow;
exports.YASUNA_08 = yasuna_08_cow;
exports.YASUNA_09 = yasuna_09_cow;
exports.YASUNA_10 = yasuna_10_cow;
exports.YASUNA_11 = yasuna_11_cow;
exports.YASUNA_12 = yasuna_12_cow;
exports.YASUNA_13 = yasuna_13_cow;
exports.YASUNA_14 = yasuna_14_cow;
exports.YASUNA_16 = yasuna_16_cow;
exports.YASUNA_17 = yasuna_17_cow;
exports.YASUNA_18 = yasuna_18_cow;
exports.YASUNA_19 = yasuna_19_cow;
exports.YASUNA_20 = yasuna_20_cow;
exports.YMD_UDON = ymd_udon_cow;
exports.ZEN_NOH_MILK = zenNohMilk_cow;

Object.defineProperty(exports, '__esModule', { value: true });

})));
