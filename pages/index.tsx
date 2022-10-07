import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import Byline from '../components/Byline'

export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

  return (
    <Layout>
      <Head>
      <title>The Captain Blog</title>
      </Head>
      <h1>The Maliek Blog</h1>

      <Byline author="Maliek Galant" />
      <p className="caption">Maliek4LMaxine</p>
      
      <p>
        Cat ipsum dolor <a href={isAmp ? '/dog?amp=1' : '/dog'}> Programs</a>,
        eat grass, throw it back up but refuse to leave cardboard box or groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!. Hide from vacuum
        cleaner.
 
        but step on your keyboard while you're gaming
        and then turn in a circle put butt in owner's face human give me
        attention meow or eat and than sleep on your face. Friends are not food
        jump around on couch, meow constantly until given food, or walk on car
        leaving trail of paw prints on hood and windshield, and spread kitty
        litter all over house, going to catch the red dot today going to catch
        the red dot today. Jump off balcony, onto stranger's head.
      </p>
      <p>
        Meow to be let out damn that dog howl uncontrollably for no reason
        caticus cuteicus for play riveting piece on synthesizer keyboard. Meow
        loudly just to annoy owners the dog smells bad for eat the fat cats
        food, yet ignore the squirrels, you'll never catch them anyway cat
        snacks spread kitty litter all over house or hopped up on catnip. Spit
        up on light gray carpet instead of adjacent linoleum throwup on your
        pillow, so cat is love, cat is life yet human is washing you why help oh
        the horror flee scratch hiss bite. Chase mice. Swat turds around the
        house hide at bottom of staircase to trip human. Meowing non stop for
        food howl on top of tall thing. Shake treat bag pee in human's bed until
        he cleans the litter box missing until dinner time. Have secret plans
        climb a tree, wait for a fireman jump to fireman then scratch his face
        bleghbleghvomit my furball really tie the room together. Chase dog then
        run away purr shake treat bag spit up on light gray carpet instead of
        adjacent linoleum but dream about hunting birds. Hiss at vacuum cleaner
        milk the cow lay on arms while you're using the keyboard sleep in the
        bathroom sink. Stare at ceiling touch water with paw then recoil in
        horror or refuse to leave cardboard box. Paw at your fat belly plan
        steps for world domination for going to catch the red dot today going to
        catch the red dot today slap owner's face at 5am until human fills food
        dish scratch at the door then walk away for intrigued by the shower, but
        steal the warm chair right after you get up. Fall asleep on the washing
        machine destroy couch as revenge scream at the bath so love to play with
        owner's hair tie. Howl uncontrollably for no reason rub whiskers on bare
        skin act innocent. Cats making all the muffins lick butt and make a
        weird face meow all night having their mate disturbing sleeping humans
        human give me attention meow intently stare at the same spot. Sleep on
        dog bed, force dog to sleep on floor spot something, big eyes, big eyes,
        crouch, shake butt, prepare to pounce for wake up human for food at 4am
        or pooping rainbow while flying in a toasted bread costume in space
        sleep on keyboard put toy mouse in food bowl run out of litter box at
        full speed . Jump off balcony, onto stranger's head lick butt and make a
        weird face but go into a room to decide you didn't want to be in there
        anyway so then cats take over the world, pee in human's bed until he
        cleans the litter box and if it fits, i sits caticus cuteicus. Eats
        owners hair then claws head lounge in doorway, and hide when guests come
        over chase ball of string eat owner's food play riveting piece on
        synthesizer keyboard. Purrr purr little cat, little cat purr purr spit
        up on light gray carpet instead of adjacent linoleum kitty loves pigs
        yet damn that dog meow or walk on car leaving trail of paw prints on
        hood and windshield. Roll on the floor purring your whiskers off meow
        all night having their mate disturbing sleeping humans need to chase
        tail meow hide when guests come over. Soft kitty warm kitty little ball
        of furr destroy the blinds meow leave hair everywhere attack dog, run
        away and pretend to be victim. Going to catch the red dot today going to
        catch the red dot today instantly break out into full speed gallop
        across the house for no reason meow so hide when guests come over, yet
        hide at bottom of staircase to trip human toy mouse squeak roll over
        claws in your leg. Cat slap dog in face lick plastic bags why must they
        do that.
      </p>
      
      <style jsx>{`
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}
