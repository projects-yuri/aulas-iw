window.onsubmit = (form) =>
{
    form.preventDefault()
    const yearBirth = form.target.querySelector('#birth').value
    const male = form.target.querySelector('#male').checked
    const image = document.getElementById('img')
    const message = document.getElementById('message')

    const ageCheck = (birth) =>
    {
        // We can use "Date" from JS to get the fullYear
        const age = 2022 - birth
        return age
    }
    const stageCheck = (stage) =>
    {
        if(stage == 0){return}
        if(stage > 0 && stage <= 10){return 'child'}
        if(stage > 10 && stage <= 20){return 'teen'}
        if(stage > 20 && stage <= 103){return 'adult'}
        if(stage >= 104){return false}
    }
    const genderAndImage = () =>
    {
        let gender
        if(male == true){ gender = 'male' }
        else{ gender = 'female' }
        if(stage == undefined){ 
            message.textContent = "Oops! It looks like you're 0 years old :/"
            image.src = ''
        }
        else if(stage == false) { 
            message.textContent = "Whoa! It looks like you are over 104 years old... It looks fake lol" 
            image.src = ''
        }
        else
        {
            image.src = `./imgs/${stage}/${gender}.svg`
            message.textContent = `So, you're ${age} years old, cool!`
        }
    }
    const animationslol = () =>
    {
        const tl = gsap.timeline()
        const media = window.matchMedia("(max-width: 980px)")
        if(media.matches)
        {
            tl.to('.rightContent',
            {
                height: '100%',
                duration: 0.6
            })
            tl.from('#message',
            {
                opacity: 0,
                duration: 0.2
            })
            tl.from('#img',
            {
                opacity: 0,
                duration: 0.2
            })
        }
        else
        {
            tl.to(form.target,
            {
                x: '-5%',
                duration: 0.5
            })
            tl.to('.rightContent',
            {
                width: '100%',
                duration: 0.5
            })
            tl.from('#message',
            {
                opacity: 0,
                duration: 0.2
            })
            tl.from('#img',
            {
                opacity: 0,
                duration: 0.2
            })
        }
    }
    
    const age = ageCheck(yearBirth)
    const stage = stageCheck(age)
    genderAndImage()
    animationslol()
}
console.log('║▌║▌║█│▌║▌║▌lol║█│▌║▌║▌║█│▌')