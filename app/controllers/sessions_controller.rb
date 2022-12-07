class SessionsController < ApplicationController
    def create
        login= Login.find_by(user_name: params[:user_name])
        if login&.authenticate(params[:password])
            session[:login_id] = login.id
            render json:login, status: :created
        else
            render json: {error: "invalid username or password"}, status: :unauthorized
        end
    end
        def destroy
            session.delete :login_id
            head :no_content
        end
end
