class house
{
    constructor(x,y)
    {
        this.body=createSprite(x,y,160,90)
        this.houseRank=1
        this.button=createButton("upgrade level")
        this.button.position(x-80,y)
        console.log(this.button)
        
        
    

     //   delay(100*60*60*3)
        simcash=simcash+(10*this.houseRank)
        cityStorage=cityStorage-4
        ironCount=ironCount-2;
        woodcount=woodcount-2;
    }
    upgradelevel()
    {
        
        if (mousePressedOver(this.button))
        {
          this.houseRank++
          TextTrackList
          text(this.houseRank,200,200)


        }
    }
    fire(a)
    {
        if(a.isTouching(this.bodybody))
        {
            return("hi☺")
           

        }
        else
        {
            delay(1000*60*60)
            this.houseRank=this.houseRank--

        }
        

    }

    

}