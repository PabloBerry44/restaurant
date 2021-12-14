var a = 0;

function switch_fun()
{
    if( a == 1)
    {
        document.getElementById("form").style.display = "block";
        document.getElementById("list").style.display = "none";
        document.getElementById("button_title").innerHTML = "Other options";

        a--;
    }
    else
    {
        document.getElementById("form").style.display = "none";
        document.getElementById("list").style.display = "block";
        document.getElementById("button_title").innerHTML = "E-mail Us";

        a++;
    }

}