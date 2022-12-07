class CoffeesController < ApplicationController
    def index
      coffee = Coffee.all
      render json: coffee
  end

  def show
  coffee = Coffee.find_by!(id: params[:id])
  render json: coffee
  end
end
