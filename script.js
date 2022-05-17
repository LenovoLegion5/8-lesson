function ExamCheck(points,Lesson,missHomework){
    if (points >= 95 && points <= 100 && Lesson >= 11 && missHomework <= 3){
        console.log("You passed the EXAM!");
    }
    else if (points > 95 && points <= 100 && Lesson <= 10 && missHomework < 0){
        console.log("You should do not be late to lessons!");
    }
    else if (points < 95 && points > 90 && (Lesson >= 10 || missHomework <= 2)){
        console.log('Keep it up!');
    }
    else if (points < 90 && points > 80 && Lesson >= 10 || missHomework === 0){
        console.log('You should pass the interview.');
    }
    else if (points < 90 && points > 80 && Lesson > 11 || missHomework < 2){
        console.log('You should pass the interview.');
    }
    else if (points < 80 && points >= 70 && Lesson == 12 || missHomework <= 0){
        console.log('Not bad.But you should pass the interview.');
    }
    else{
        console.log("We didn't have an exam!");
    }

    return (points,Lesson,missHomework);
}

ExamCheck(91,12,1);