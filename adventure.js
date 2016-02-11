//Detective Adventure

alert('Welcome, to the Detective Adventure game.');

alert('This is coming from the Chief of Police, Rodney Miller.')
console.log('This is coming from the Chief of Police, Rodney Miller.')

var person = prompt("Please enter your name", "");
if (person !== null) {
    alert("Hello Detective " + person);
    console.log("Hello Detective " + person);
    }

var answer = prompt("We have three cases for you to pick from today;\nCASE #1: A plane has crashed in a corn field in Louisiana\nCASE #2: A Dolphin has been kidnapped from Sea World\nCASE #3: A massive outbreak of a mystery virius in NY");

if(answer === '1' || answer === 'CASE #1') {
  alert("Good choice, this is a serious threat to the U.S. Please go straight to the corn field to investagate.");
  console.log("Good choice, this is a serious threat to the U.S. Please go straight to the corn field to investagate.");
  var answer = prompt("How would you like to travel to the crime scene? PLANE, MOTORCYCLE, or HOVERBOARD?");

  if(answer === 'PLANE' || answer === 'plane'){
    alert("Welcome to Louisiana, where the local time is 10 am, bags can be claimed at carousel B. Please remain seated with your seatbelts fastened until the captain has turned off the seatbelt sign");
    console.log("Welcome to Louisiana, where the local time is 10 am, bags can be claimed at carousel B. Please remain seated with your seatbelts fastened until the captain has turned off the seatbelt sign");
    var answer = prompt("What do you do first?\n1.Go to crash site\n2.Go to police station where the black box from the plane is\n3.Go to the hospital and talk to the one living survivor");

      if(answer === '1'){
        alert("Smart, there is a clue at the crash site. It seems that the corn stalks have all broken into a curious pattern. What do you think the cause of the crash could be?");
        console.log("Smart, there is a clue at the crash site. It seems that the corn stalks have all broken into a curious pattern. What do you think the cause of the crash could be?");
        var answer = prompt("");

          if(answer === 'Aliens' || answer === 'aliens') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");

          }  else {
              alert("Sorry, that is the wrong answer. Obviously the answer is aliens, made the plane crash. You are fired.");
              console.log("Sorry, that is the wrong answer. Obviously the answer is aliens, made the plane crash. You are fired.");
          }
      } if(answer === '2'){
          alert("Good thinking, the black box has lots of background noise. It sounds like weird loud blasting sounds. What do you think the cause of the crash could be?");
          console.log("Good thinking, the black box has lots of background noise. It sounds like weird loud blasting sounds. What do you think the cause of the crash could be?");
          var answer = prompt("");

          if(answer === 'Engine Trouble') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");

          }  else {
              alert("Sorry, that is the wrong answer. There was Engine Trouble, that created a problem and made the plane crash. You are fired.");
              console.log("Sorry, that is the wrong answer. There was Engine Trouble, that created a problem and made the plane crash. You are fired.");
          }
      } if(answer === '3'){
          alert("Wow, can you believe that? The survivor said that he saw something fly into the engine. What do you think the cause of the crash could be?");
          console.log("Wow, can you believe that? The survivor said that he saw something fly into the engine. What do you think the cause of the crash could be?");
          var answer = prompt("");

          if(answer === 'bird' || answer === 'Bird') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");
      }   else {
            alert("Sorry, that is the wrong answer. The answer is a bird, made the plane crash. You are fired.");
            console.log("Sorry, that is the wrong answer. The answer is a bird, made the plane crash. You are fired.");
      }
    }

  }
  if(answer === 'MOTORCYCLE' || answer === 'motorcycle'){
    alert("Since you decided to take a road trip, don't forget to stop by old Six Flags that was damaged by Hurricane Katrina but was used for scenes in the new Jurassic World movie!");
    console.log("Since you decided to take a road trip, don't forget to stop by old Six Flags that was damaged by Hurricane Katrina but was used for scenes in the new Jurassic World movie!");
    var answer = prompt("What do you do first?\n1.Go to crash site\n2.Go to police station where the black box from the plane is\n3.Go to the hospital and talk to the one living survivor");

      if(answer === '1'){
        alert("Smart, there is a clue at the crash site. There are weird symbols the corn stalks have formed around the plane. What do you think the cause of the crash could be?");
        console.log("Smart, there is a clue at the crash site. There are weird symbols the corn stalks have formed around the plane. What do you think the cause of the crash could be?");
        var answer = prompt("");

          if(answer === 'Aliens' || answer === 'aliens') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");

          }  else {
              alert("Sorry, that is the wrong answer. Obviously the answer is aliens, made the plane crash. You are fired.");
              console.log("Sorry, that is the wrong answer. Obviously the answer is aliens, made the plane crash. You are fired.");
          }
      } if(answer === '2'){
          alert("Good thinking, the black box has lots of background noise. It sounds like weird loud blasting sounds. What do you think the cause of the crash could be?");
          console.log("Good thinking, the black box has lots of background noise. It sounds like weird loud blasting sounds. What do you think the cause of the crash could be?");
          var answer = prompt("");

          if(answer === 'Engine Trouble') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");

          }  else {
              alert("Sorry, that is the wrong answer. There was Engine Trouble, that created a problem and made the plane crash. You are fired.");
              console.log("Sorry, that is the wrong answer. There was Engine Trouble, that created a problem and made the plane crash. You are fired.");
          }
      } if(answer === '3'){
          alert("Wow, can you believe that? The survivor said that he saw something fly into the engine. What do you think the cause of the crash could be?");
          console.log("Wow, can you believe that? The survivor said that he saw something fly into the engine. What do you think the cause of the crash could be?");
          var answer = prompt("");

          if(answer === 'bird' || answer === 'Bird') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");
      }   else {
            alert("Sorry, that is the wrong answer. The answer is a bird, made the plane crash. You are fired.");
            console.log("Sorry, that is the wrong answer. The answer is a bird, made the plane crash. You are fired.");
      }
    }

  }
  if(answer === 'HOVERBOARD' || answer === 'hoverboard'){
    alert("Well this might take a while, but if you insist. Make sure to grab some crawfish when you get there, you will be famished after all that hoverboarding.");
    console.log("Well this might take a while, but if you insist. Make sure to grab some crawfish when you get there, you will be famished after all that hoverboarding.");
    var answer = prompt("What do you do first?\n1.Go to crash site\n2.Go to police station where the black box from the plane is\n3.Go to the hospital and talk to the one living survivor");

      if(answer === '1'){
        alert("Smart, there is a clue at the crash site. There are weird symbols the corn stalks have formed around the plane. What do you think the cause of the crash could be?");
        console.log("Smart, there is a clue at the crash site. There are weird symbols the corn stalks have formed around the plane. What do you think the cause of the crash could be?");
        var answer = prompt("");

          if(answer === 'Aliens' || answer === 'aliens') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");

          }  else {
              alert("Sorry, that is the wrong answer. Obviously the answer is aliens, made the plane crash. You are fired.");
              console.log("Sorry, that is the wrong answer. Obviously the answer is aliens, made the plane crash. You are fired.");
          }
      } if(answer === '2'){
          alert("Good thinking, the black box has lots of background noise. It sounds like weird loud blasting sounds. What do you think the cause of the crash could be?");
          console.log("Good thinking, the black box has lots of background noise. It sounds like weird loud blasting sounds. What do you think the cause of the crash could be?");
          var answer = prompt("");

          if(answer === 'Engine Trouble') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");

          }  else {
              alert("Sorry, that is the wrong answer. There was Engine Trouble, that created a problem and made the plane crash. You are fired.");
              console.log("Sorry, that is the wrong answer. There was Engine Trouble, that created a problem and made the plane crash. You are fired.");
          }
      } if(answer === '3'){
          alert("Wow, can you believe that? The survivor said that he saw something fly into the engine. What do you think the cause of the crash could be?");
          console.log("Wow, can you believe that? The survivor said that he saw something fly into the engine. What do you think the cause of the crash could be?");
          var answer = prompt("");

          if(answer === 'bird' || answer === 'Bird') {
            alert("Gold Star! You figured out the case!");
            console.log("Gold Star! You figured out the case!");
      }   else {
            alert("Sorry, that is the wrong answer. The answer is a bird, made the plane crash. You are fired.");
            console.log("Sorry, that is the wrong answer. The answer is a bird, made the plane crash. You are fired.");
      }
    }

  }
}



else if(answer === '2' || answer === 'CASE #2') {
  alert("Thank you for your service to helping all creatures! Especially this money maker for Sea World, Shimmer.");
  console.log("Thank you for your service to helping all creatures! Especially this money maker for Sea World, Shimmer.");
  var answer = prompt("How would you like to travel to the crime scene? BOAT, SCUBA DIVE, or CRUISE SHIP?");

  if(answer === 'BOAT' || answer === 'boat'){
    alert("Welcome to Sea World, Sea of Surprises! Hope you had a safe trip.");
    console.log("Welcome to Sea World, Sea of Surprises! Hope you had a safe trip.");
    var answer = prompt("What do you do first?\n1.Go to dolphin tank\n2.Go to security to look at video tapes\n3.Go to talk to the dolphin trainer");

      if(answer === '1'){
      alert("Smart, there is a clue at the tank. The criminals who took Shimmer also spray painted the tank, writing 'Sea World of Hurt' on the tank. Who do you think kidnapped Shimmer?");
      console.log("Smart, there is a clue at the tank. The criminals who took Shimmer also spray painted the tank, writing 'Sea World of Hurt' on the tank. Who do you think kidnapped Shimmer?");
      var answer = prompt("");

          if(answer === 'PETA') {
          alert("Gold Star! You figured out the case!");
          console.log("Gold Star! You figured out the case!");

        }  else {
          alert("Sorry, that is the wrong answer. Obviously the answer is the PETA group, trying to make a statement. You are fired.");
          console.log("Sorry, that is the wrong answer. Obviously the answer is the PETA group, trying to make a statement. You are fired.");
          }
    } if(answer === '2'){
      alert("Good thinking, the tapes filmed the whole kidnapping. It looks like a group of people dressed in hawaiian shirts and tutus. Who do you think kidnapped Shimmer?");
      console.log("Good thinking, the tapes filmed the whole kidnapping. It looks like a group of people dressed in hawaiian shirts and tutus. Who do you think kidnapped Shimmer?");
      var answer = prompt("");

            if(answer === 'Ace Ventura' || answer === 'Drunk Teenagers') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");

            }  else {
                alert("Sorry, that is the wrong answer. It was a group of drunk teenagers dressed up as Ace Ventura trying to reenact the movie 'Ace Ventura: Pet Detective'. You are fired.");
                console.log("Sorry, that is the wrong answer. It was a group of drunk teenagers dressed up as Ace Ventura trying to reenact the movie 'Ace Ventura: Pet Detective'. You are fired.");
            }
    } if(answer === '3'){
      alert("Wow, looks like the trainer was pretty close to the dolphin he won't stop crying. Who do you think kidnapped Shimmer?");
      console.log("Wow, looks like the trainer was pretty close to the dolphin he won't stop crying. Who do you think kidnapped Shimmer?");
      var answer = prompt("");

            if(answer === 'Trainer' || answer === 'trainer') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");
        }   else {
              alert("Sorry, that is the wrong answer. The answer is the trainer, he wanted Shimmer to live a normal life in the big blue open ocean. You are fired.");
              console.log("Sorry, that is the wrong answer. The answer is the trainer, he wanted Shimmer to live a normal life in the big blue open ocean. You are fired.");
        }
      }

    }
    if(answer === 'SCUBA DIVE' || answer === 'scuba dive'){
      alert("Welcome to Sea World, Sea of Surprises! Hope you were swimming safely and don't get the bends.");
      console.log("Welcome to Sea World, Sea of Surprises! Hope you were swimming safely and don't get the bends.");
      var answer = prompt("What do you do first?\n1.Go to dolphin tank\n2.Go to security to look at video tapes\n3.Go to talk to the dolphin trainer");

            if(answer === '1'){
            alert("Smart, there is a clue at the tank. The criminals who took Shimmer also spray painted the tank, writing 'Sea World of Hurt' on the tank. Who do you think kidnapped Shimmer?");
            console.log("Smart, there is a clue at the tank. The criminals who took Shimmer also spray painted the tank, writing 'Sea World of Hurt' on the tank. Who do you think kidnapped Shimmer?");
            var answer = prompt("");

                if(answer === 'PETA') {
                alert("Gold Star! You figured out the case!");
                console.log("Gold Star! You figured out the case!");

              }  else {
                alert("Sorry, that is the wrong answer. Obviously the answer is the PETA group, trying to make a statement. You are fired.");
                console.log("Sorry, that is the wrong answer. Obviously the answer is the PETA group, trying to make a statement. You are fired.");
                }
          } if(answer === '2'){
            alert("Good thinking, the tapes filmed the whole kidnapping. It looks like a group of people dressed in hawaiian shirts and tutus. Who do you think kidnapped Shimmer?");
            console.log("Good thinking, the tapes filmed the whole kidnapping. It looks like a group of people dressed in hawaiian shirts and tutus. Who do you think kidnapped Shimmer?");
            var answer = prompt("");

                  if(answer === 'Ace Ventura' || answer === 'Drunk Teenagers') {
                    alert("Gold Star! You figured out the case!");
                    console.log("Gold Star! You figured out the case!");

                  }  else {
                      alert("Sorry, that is the wrong answer. It was a group of drunk teenagers dressed up as Ace Ventura trying to reenact the movie 'Ace Ventura: Pet Detective'. You are fired.");
                      console.log("Sorry, that is the wrong answer. It was a group of drunk teenagers dressed up as Ace Ventura trying to reenact the movie 'Ace Ventura: Pet Detective'. You are fired.");
                  }
          } if(answer === '3'){
            alert("Wow, looks like the trainer was pretty close to the dolphin he won't stop crying. Who do you think kidnapped Shimmer?");
            console.log("Wow, looks like the trainer was pretty close to the dolphin he won't stop crying. Who do you think kidnapped Shimmer?");
            var answer = prompt("");

                  if(answer === 'Trainer' || answer === 'trainer') {
                    alert("Gold Star! You figured out the case!");
                    console.log("Gold Star! You figured out the case!");
              }   else {
                    alert("Sorry, that is the wrong answer. The answer is the trainer, he wanted Shimmer to live a normal life in the big blue open ocean. You are fired.");
                    console.log("Sorry, that is the wrong answer. The answer is the trainer, he wanted Shimmer to live a normal life in the big blue open ocean. You are fired.");
              }
            }

    }
    if(answer === 'CRUISE SHIP' || answer === 'cruise ship'){
      alert("Welcome to Sea World, Sea of Surprises! Hope you didn't have too many margaritas while relaxing before this case.");
      console.log("Welcome to Sea World, Sea of Surprises! Hope you didn't have too many margaritas while relaxing before this case.");
      var answer = prompt("What do you do first?\n1.Go to dolphin tank\n2.Go to security to look at video tapes\n3.Go to talk to the dolphin trainer");

            if(answer === '1'){
            alert("Smart, there is a clue at the tank. The criminals who took Shimmer also spray painted the tank, writing 'Sea World of Hurt' on the tank. Who do you think kidnapped Shimmer?");
            console.log("Smart, there is a clue at the tank. The criminals who took Shimmer also spray painted the tank, writing 'Sea World of Hurt' on the tank. Who do you think kidnapped Shimmer?");
            var answer = prompt("");

                if(answer === 'PETA') {
                alert("Gold Star! You figured out the case!");
                console.log("Gold Star! You figured out the case!");

              }  else {
                alert("Sorry, that is the wrong answer. Obviously the answer is the PETA group, trying to make a statement. You are fired.");
                console.log("Sorry, that is the wrong answer. Obviously the answer is the PETA group, trying to make a statement. You are fired.");
                }
          } if(answer === '2'){
            alert("Good thinking, the tapes filmed the whole kidnapping. It looks like a group of people dressed in hawaiian shirts and tutus. Who do you think kidnapped Shimmer?");
            console.log("Good thinking, the tapes filmed the whole kidnapping. It looks like a group of people dressed in hawaiian shirts and tutus. Who do you think kidnapped Shimmer?");
            var answer = prompt("");

                  if(answer === 'Ace Ventura' || answer === 'Drunk Teenagers') {
                    alert("Gold Star! You figured out the case!");
                    console.log("Gold Star! You figured out the case!");

                  }  else {
                      alert("Sorry, that is the wrong answer. It was a group of drunk teenagers dressed up as Ace Ventura trying to reenact the movie 'Ace Ventura: Pet Detective'. You are fired.");
                      console.log("Sorry, that is the wrong answer. It was a group of drunk teenagers dressed up as Ace Ventura trying to reenact the movie 'Ace Ventura: Pet Detective'. You are fired.");
                  }
          } if(answer === '3'){
            alert("Wow, looks like the trainer was pretty close to the dolphin he won't stop crying. Who do you think kidnapped Shimmer?");
            console.log("Wow, looks like the trainer was pretty close to the dolphin he won't stop crying. Who do you think kidnapped Shimmer?");
            var answer = prompt("");

                  if(answer === 'Trainer' || answer === 'trainer') {
                    alert("Gold Star! You figured out the case!");
                    console.log("Gold Star! You figured out the case!");
              }   else {
                    alert("Sorry, that is the wrong answer. The answer is the trainer, he wanted Shimmer to live a normal life in the big blue open ocean. You are fired.");
                    console.log("Sorry, that is the wrong answer. The answer is the trainer, he wanted Shimmer to live a normal life in the big blue open ocean. You are fired.");
              }
            }

    }
  }



  else if(answer === '3' || answer === 'CASE #3') {
    alert("Good choice, this is a serious threat to the U.S. Please go straight to New York to investagate this mystery virius.");
    console.log("Good choice, this is a serious threat to the U.S. Please go straight to New York to investagate this mystery virius.");
    var answer = prompt("How would you like to travel to the New York? PLANE, MOTORCYCLE, or HOVERBOARD?");

    if(answer === 'PLANE' || answer === 'plane'){
      alert("Welcome to New York, where the local time is 8 am, bags can be claimed at carousel E. Please remain seated with your seatbelts fastened until the captain has turned off the seatbelt sign.");
      console.log("Welcome to New York, where the local time is 8 am, bags can be claimed at carousel E. Please remain seated with your seatbelts fastened until the captain has turned off the seatbelt sign.");
      var answer = prompt("What do you do first?\n1.Go to CDC headquarters in New York\n2.Go to the hospital and talk to victims of the virius and their doctors\n3.Go to the Mayor of New York to talk to him about the problem");

        if(answer === '1'){
          console.log("Smart, there is a clue at the CDC. It seems that one of the viriuses being tested on was stolen, and a staff member missing. What do you think the cause of this virius could be?");
          console.log("Smart, there is a clue at the CDC. It seems that one of the viriuses being tested on was stolen, and a staff member missing. What do you think the cause of this virius could be?");
          var answer = prompt("");

            if(answer === 'Staff Member' || answer === 'staff member') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");

            }  else {
                alert("Sorry, that is the wrong answer. It was the staff member, who went crazy. You are fired.");
                console.log("Sorry, that is the wrong answer. It was the staff member, who went crazy. You are fired.");
            }
        } if(answer === '2'){
            alert("Good thinking, the victims and doctors are very imformative. It looks like they all have weird bite marks on their bodies. What do you think the cause of this virius could be?");
            console.log("Good thinking, the victims and doctors are very imformative. It looks like they all have weird bite marks on their bodies. What do you think the cause of this virius could be?");
            var answer = prompt("");

            if(answer === 'Zombies' || answer === 'zombies') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");

            }  else {
                alert("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
                console.log("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
            }
        } if(answer === '3'){
            alert("The Mayor is a wise choice. He has a lot of knowledge on what goes on in the city. Seems there has been people biting other people. What do you think the cause of this virius could be?");
            console.log("The Mayor is a wise choice. He has a lot of knowledge on what goes on in the city. Seems there has been people biting other people. What do you think the cause of this virius could be?");
            var answer = prompt("");

            if(answer === 'Zombies' || answer === 'zombies') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");
        }   else {
              alert("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
              console.log("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
        }
      }

    }
    if(answer === 'MOTORCYCLE' || answer === 'motorcycle'){
      alert("Your route is I-95, it's a long one. Make sure to stop by South of the Border for a souvenir.");
      console.log("Your route is I-95, it's a long one. Make sure to stop by South of the Border for a souvenir.");
      var answer = prompt("What do you do first?\n1.Go to CDC headquarters in New York\n2.Go to the hospital and talk to victims of the virius and their doctors\n3.Go to the Mayor of New York to talk to him about the problem");

        if(answer === '1'){
          alert("Smart, there is a clue at the CDC. It seems that one of the viriuses being tested on was stolen, and a staff member missing. What do you think the cause of this virius could be?");
          console.log("Smart, there is a clue at the CDC. It seems that one of the viriuses being tested on was stolen, and a staff member missing. What do you think the cause of this virius could be?");
          var answer = prompt("");

            if(answer === 'Staff Member' || answer === 'staff member') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");

            }  else {
                alert("Sorry, that is the wrong answer. It was the staff member, who went crazy. You are fired.");
                console.log("Sorry, that is the wrong answer. It was the staff member, who went crazy. You are fired.");
            }
        } if(answer === '2'){
            alert("Good thinking, the victims and doctors are very imformative. It looks like they all have weird bite marks on their bodies. What do you think the cause of this virius could be?");
            console.log("Good thinking, the victims and doctors are very imformative. It looks like they all have weird bite marks on their bodies. What do you think the cause of this virius could be?");
            var answer = prompt("");

            if(answer === 'Zombies' || answer === 'zombies') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");

            }  else {
                alert("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
                console.log("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
            }
        } if(answer === '3'){
            alert("The Mayor is a wise choice. He has a lot of knowledge on what goes on in the city. Seems there has been people biting other people. What do you think the cause of this virius could be?");
            console.log("The Mayor is a wise choice. He has a lot of knowledge on what goes on in the city. Seems there has been people biting other people. What do you think the cause of this virius could be?");
            var answer = prompt("");

            if(answer === 'Zombies' || answer === 'zombies') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");
        }   else {
              alert("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
              console.log("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
        }
      }

    }
    if(answer === 'HOVERBOARD' || answer === 'hoverboard'){
      alert("Your route is I-95, it's a long one. Make sure to stop by South of the Border for a souvenir.");
      console.log("Your route is I-95, it's a long one. Make sure to stop by South of the Border for a souvenir.");
      var answer = prompt("What do you do first?\n1.Go to CDC headquarters in New York\n2.Go to the hospital and talk to victims of the virius and their doctors\n3.Go to the Mayor of New York to talk to him about the problem");

        if(answer === '1'){
          alert("Smart, there is a clue at the CDC. It seems that one of the viriuses being tested on was stolen, and a staff member missing. What do you think the cause of this virius could be?");
          console.log("Smart, there is a clue at the CDC. It seems that one of the viriuses being tested on was stolen, and a staff member missing. What do you think the cause of this virius could be?");
          var answer = prompt("");

            if(answer === 'Staff Member' || answer === 'staff member') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");

            }  else {
                alert("Sorry, that is the wrong answer. It was the staff member, who went crazy. You are fired.");
                console.log("Sorry, that is the wrong answer. It was the staff member, who went crazy. You are fired.");
            }
        } if(answer === '2'){
            alert("Good thinking, the victims and doctors are very imformative. It looks like they all have weird bite marks on their bodies. What do you think the cause of this virius could be?");
            console.log("Good thinking, the victims and doctors are very imformative. It looks like they all have weird bite marks on their bodies. What do you think the cause of this virius could be?");
            var answer = prompt("");

            if(answer === 'Zombies' || answer === 'zombies') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");

            }  else {
                alert("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
                console.log("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
            }
        } if(answer === '3'){
            alert("The Mayor is a wise choice. He has a lot of knowledge on what goes on in the city. Seems there has been people biting other people. What do you think the cause of this virius could be?");
            console.log("The Mayor is a wise choice. He has a lot of knowledge on what goes on in the city. Seems there has been people biting other people. What do you think the cause of this virius could be?");
            var answer = prompt("");

            if(answer === 'Zombies' || answer === 'zombies') {
              alert("Gold Star! You figured out the case!");
              console.log("Gold Star! You figured out the case!");
        }   else {
              alert("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
              console.log("Sorry, that is the wrong answer. Obviously it was Zombies, the big hint was the bite marks. You are fired, and might want to find a crossbow or just find Daryl Dixon.");
        }
      }

    }
  }
