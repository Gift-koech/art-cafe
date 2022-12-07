class ReviewsController < ApplicationController

    def index
       reviews = Review.all
       render json: reviews
      end
    
    
    def update
        review = find_review
          if review
            review.update!(review_params)
            render json: review
          else
            render json: {error: "Review not found"}, status: :not_found
        end
    end

    def create
        review = Review.create!(review_params)
        render json: review
      end
    
      private
    
      def find_review
        Review.find_by(id: params[:id])
      end
    
      def review_params
        params.permit(:review, :user_id, :coffee_id)
      end
end
