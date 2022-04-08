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
				sh "docker build -t JaladJhamb/Frontend:latest FrontEnd/."
				
			}
        }
        stage('Build for backend image') {

			steps {
				sh "docker build -t JaladJhamb/backend:latest backend/."
			
			}
        }    
        stage('Build for mysql image') {

			steps {
				sh "docker build -t JaladJhamb/mysql:latest db/."
			
			}
		}
       stage('Push') {

			steps {
				script{
                    withCredentials([string(credentialsId: 'Shankey23', variable: 'dockerhub')]) {
                        sh "docker login -u Shankey23 -p ${dockerhub}"


                        sh "docker push JaladJhamb/frontend:latest"
                        sh "docker push JaladJhamb/backend:latest"
                        sh "docker push JaladJhamb/mysql:latest"
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
    
          
