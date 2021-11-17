const postDate = [
    {
        'no':1,
        'title':'Mon'
    },
    {
        'no':2,
        'title':'Tue'
    },
    {
        'no':3,
        'title':'Wed'
    },
    {
        'no':4,
        'title':'Thur'
    },
    {
        'no':5,
        'title':'Fri'
    },
    {
        'no':6,
        'title':'Sat'
    },
    {
        'no':7,
        'title':'Sun'
    },
]

const getPostByNo = no => {
    const array = postDate.filter(x => x.no === no);
    if(array.length === 1){
        return array[0]
    }
    return null;
}

export {postDate, getPostByNo};