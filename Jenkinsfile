pipeline{

    agent any

    environment{
         DOCKERHUB_CREDENTIALS=credentials('Dockerhub')
    }
    stages{
        stage('gitclone'){

            steps{
                git "https://github.com/JaladJhamb/nodeJS-app.git"
            }
        }
        stage('Build for frontend image') {

			steps {
				sh "docker build -t shankey23/frontend:latest ./FrontEnd"
				
			}
        }
        stage('Build for backend image') {

			steps {
				sh "docker build -t shankey23/backend:latest ./backend"
			
			}
        }    
        stage('Build for mysql image') {

			steps {
				sh "docker build -t shankey23/mysql:latest ./db"
			
			}
		}
       stage('Push') {

			steps {
				script{
                    withCredentials([string(credentialsId: 'Shankey23', variable: 'dockerhub')]) {
                        sh "docker login -u shankey23 -p ${dockerhub}"


                        sh "docker push shankey23/frontend:latest"
                        sh "docker push shankey23/backend:latest"
                        sh "docker push shankey23/mysql:latest"
                    }
                
			}
            }
		}
		
		}
        post {
            always {
                sh 'docker logout'
		}
	}

    }
    
          
