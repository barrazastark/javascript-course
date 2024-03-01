const cargarIssues = async () => {
        try { var response = await fetch('https://api.github.com/repos/facebook/react/issues/28479')


                
            if (response.status === 200){
                var issues = await response.json();
                var issue = `<a href='#'>${issues.title}</a>`;
                document.getElementById('errorTitle').innerHTML = issue;

                console.log(issues.title);
                console.log(typeof issues.title);
            } else if (response.status === 404){
                console.log('Issue not found.');
            }



            } catch (error){
                console.log(error);        
        }
    }

cargarIssues();