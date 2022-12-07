class LoginsController < ApplicationController
    def create
        login= Login.create(login_params)
        if login.valid?
            session[:login_id] = login.id
            render json: login, status: :created
        else
            render json: {errors: login.errors.full_messages}, status: :unprocessable_entity
        end
      end
    
      def destroy
        session.delete :login_id
        head :no_content
      end
    
      def index
        render json: Login.all
      end
    
      def show
        login = Login.find_by(id: session[:login_id])
        if login
        render json: login
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
      end
    
        private
    
        def login_params
            params.permit(:user_name, :password, :password_confirmation)
        end
end
